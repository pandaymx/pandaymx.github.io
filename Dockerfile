FROM oven/bun:1.2.20 AS build
WORKDIR /app

ENV GTAG_TRACKING_ID="123"

# Use Bun to install dependencies and build the Docusaurus site
# Copy lockfile and package manifest first to leverage layer caching
COPY package.json bun.lock* ./
RUN bun install

# Copy the rest of the repository and run the build
COPY . .
RUN CI=true bun run build

FROM nginx:stable-alpine

# 从构建阶段复制构建好的静态文件
COPY --from=build --chown=app:app /app/build /usr/share/nginx/html

# 复制自定义的 Nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]