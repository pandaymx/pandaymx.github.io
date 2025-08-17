docker build -t pandaymx/blog:latest .
docker run --rm -p 8080:80 pandaymx/blog:latest
docker compose up --build
Docker 构建与运行（使用 Bun）

构建 Docker 镜像（使用 Bun 安装依赖并构建）：

```bash
docker build -t pandaymx/blog:latest .
```

使用 Docker 运行镜像：

```bash
docker run --rm -p 8080:80 pandaymx/blog:latest
```

或者使用 docker-compose：

```bash
docker compose up --build
```

说明：
- 本仓库的 `Dockerfile` 使用已固定版本的 `oven/bun` 镜像，通过 `bun install` 安装依赖并用 `bun run build` 执行仓库中的 `build` 脚本（Docusaurus）。
- 如果本地没有 Docker，可先在本地用 Bun 构建：

```bash
bun install
bun run build
```

然后用任意静态文件服务器（例如 `serve`、`python -m http.server` 或 nginx）来查看 `build/` 目录。
- 最终的容器镜像使用 nginx 提供静态的 `build/` 目录内容。
