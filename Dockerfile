FROM oven/bun:latest AS base
WORKDIR /app

# 1. Shared dependencies stage
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# 2. Development stage
FROM base AS dev
ENV NODE_ENV=development
COPY . .
CMD ["bun", "start", "--host", "0.0.0.0"]

# 3. Build stage
FROM base AS builder
ENV NODE_ENV=production
COPY . .
RUN bun run build && \
  find build -type f \( -name "*.js" -o -name "*.css" -o -name "*.html" -o -name "*.svg" \) \
  -exec bun x brotli-cli compress --quality 11 {} \;


# 4. Brotli module builder (Using Alpine-based Nginx to ensure apk availability)
FROM nginx:1.29.8-alpine AS brotli-builder

WORKDIR /app

# Install build dependencies, download source, compile Brotli, and cleanup in one layer
USER root
ENV NGINX_VERSION=1.29.8

RUN apk add --no-cache --virtual .build-deps \
  gcc libc-dev make openssl-dev pcre2-dev pcre-dev zlib-dev \
  linux-headers git cmake g++ wget gnupg patch ca-certificates && \
  (wget -T 30 -t 5 -O nginx-${NGINX_VERSION}.tar.gz http://nginx.org/download/nginx-${NGINX_VERSION}.tar.gz || \
   wget -T 30 -t 5 -O nginx-${NGINX_VERSION}.tar.gz https://mirrors.ustc.edu.cn/nginx/download/nginx-${NGINX_VERSION}.tar.gz) && \
  tar -zxf nginx-${NGINX_VERSION}.tar.gz && \
  git clone --depth 1 --recursive --shallow-submodules -j8 https://github.com/google/ngx_brotli.git && \
  cd ngx_brotli/deps/brotli && mkdir out && cd out && \
  cmake -DCMAKE_BUILD_TYPE=Release -DBUILD_SHARED_LIBS=OFF -DCMAKE_INSTALL_PREFIX=./installed .. && \
  make -j$(nproc) brotlienc brotlicommon && \
  cd ../../../.. && \
  cd nginx-${NGINX_VERSION} && \
  ./configure --with-compat --add-dynamic-module=../ngx_brotli --with-pcre --with-pcre-jit && \
  make modules && \
  cp objs/*.so /app/ && \
  cd .. && \
  rm -rf /app/nginx-${NGINX_VERSION} /app/ngx_brotli /app/nginx-${NGINX_VERSION}.tar.gz && \
  apk del .build-deps

# 5. Production running stage
FROM nginxinc/nginx-unprivileged:alpine AS prod

LABEL maintainer="blog-owner"
LABEL description="Static blog server with Brotli support"

USER root
# Apply security updates (Robust way to avoid exit code 99)
RUN apk add --no-cache --upgrade apk-tools && \
  apk upgrade --no-cache && \
  rm -rf /var/cache/apk/*

# Copy compiled modules
COPY --from=brotli-builder /app/*.so /usr/lib/nginx/modules/

USER 101

# Copy configurations
COPY nginx-main.conf /etc/nginx/nginx.conf
COPY security-headers.conf /etc/nginx/conf.d/security-headers.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 8080

# Basic health check (robust parameters)
HEALTHCHECK --interval=60s --timeout=10s --start-period=15s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]


