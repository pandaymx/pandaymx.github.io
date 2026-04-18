FROM oven/bun:latest AS base
WORKDIR /app

# Development stage
FROM base AS dev
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
ENV NODE_ENV=development
CMD ["bun", "start", "--host", "0.0.0.0"]

# Build stage
FROM dev AS builder
ENV NODE_ENV=production
COPY . .
RUN bun run build

# 4. Brotli module builder
FROM base AS brotli-builder

# Install build dependencies and compile Brotli in one simplified layer
USER root
RUN apk add --no-cache --virtual .build-deps \
  gcc libc-dev make openssl-dev pcre2-dev zlib-dev \
  linux-headers git cmake g++ wget gnupg && \
  export NGINX_VERSION=1.27.3 && \
  wget http://nginx.org/download/nginx-${NGINX_VERSION}.tar.gz && \
  tar -zxf nginx-${NGINX_VERSION}.tar.gz && \
  git clone --depth=1 --recursive https://github.com/google/ngx_brotli.git && \
  cd nginx-${NGINX_VERSION} && \
  ./configure --with-compat --add-dynamic-module=../ngx_brotli && \
  make modules && \
  # Cleanup unnecessary files except the .so modules for smaller builder state
  cp objs/*.so /tmp/ && \
  rm -rf /app/* && \
  mv /tmp/*.so . && \
  apk del .build-deps

# 5. Production running stage
FROM nginxinc/nginx-unprivileged:alpine AS prod

LABEL maintainer="blog-owner"
LABEL description="Static blog server with Brotli support"

USER root
# Apply security updates
RUN apk update && apk upgrade --no-cache && \
  rm -rf /var/cache/apk/*

# Copy compiled modules (Merged)
COPY --from=brotli-builder /app/*.so /usr/lib/nginx/modules/

USER 101

# Copy configurations
COPY nginx-main.conf /etc/nginx/nginx.conf
COPY security-headers.conf /etc/nginx/conf.d/security-headers.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html



EXPOSE 8080

# Basic health check to ensure Nginx is responding (robust parameters)
HEALTHCHECK --interval=60s --timeout=10s --start-period=15s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]


