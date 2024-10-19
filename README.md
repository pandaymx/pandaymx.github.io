# 皮皮萌宝的博客

<div align="center">

简体中文 | [English](./README-en.md)

</div>

这个项目是一个使用 Vuerpress 和 Vuepress-Theme-Hope 构建的静态网站，并通过 GitHub Pages、GitLab Pages 和 Cloudflare 进行部署。

## 使用

### 网站


你可以通过以下链接访问网站：

1. [Github Pages](https://pandaymx.github.io/)

### Docker 

你可以在本地使用 Docker 运行网站。

```sh
docker run -p 80:80 ppmb/blog:latest
```

### pnpm

你可以从 GitHub 克隆仓库，使用 pnpm 安装依赖并运行网站。

```sh
git clone https://github.com/pandaymx/blog.git
cd blog
pnpm install
pnpm run docs:dev
```

### PWA

1. 在浏览器中打开网站。
2. 点击地址栏旁边的安装按钮（通常是一个带有加号的图标）。
3. 按照提示将网站添加到您的主屏幕。


## 更新

### Web

你无需升级，当我提交到 GitHub 时，GitHub Action 会自动更新 GitHub Pages，因此网页和 GitHub 仓库理论上为同一版本。

### Docker

你需要重新使用 `docker run` 命令重新下载容器并运行。

### pnpm

从 GitHub 上拉取最新仓库并重新安装依赖。

```sh
git pull
cd blog
pnpm install
```

### PWA 

1. 打开您的 PWA 应用。
2. 确保设备连接到网络。
3. 刷新页面以加载最新版本。