# PPMB's Blog

<div align="center">

[简体中文](./README.md) | English

</div>

This project is a static website built using Vuerpress and Vuepress-Theme-Hope, and is deployed through GitHub Pages、GitLab Pages and Cloudflare.

## Usage

### Web

You can access the website through the following links: 

1. [Github Pages](https://blog.ppmblszdp.xyz/)

### Docker 

You can use Docker to run the website locally.

```sh
docker run -p 80:80 ppmb/blog:latest
```

### pnpm

You can clone the repository from GitHub and use pnpm to install the dependencies and run the website locally.


```sh
git clone https://github.com/pandaymx/blog.git
cd blog
pnpm install
pnpm run docs:dev
```

### PWA

1. Open the website in your browser.
2. Click the install button next to the address bar (usually a plus icon).
3. Follow the prompts to add the website to your home screen.

## Update

### Web


You do not need to upgrade, when I commit to GitHub, GitHub Action will automatically update GitHub Pages, so the website and GitHub repository are theoretically the same version.

### Docker

You need to re-download the container and run it again using the `docker run` command.

### pnpm

You need to pull the latest repository from GitHub and reinstall the dependencies.

```sh
git pull
cd blog
pnpm install
```

### PWA 

1. Open your PWA application.
2. Ensure your device is connected to the internet.
3. Refresh the page to load the latest version.