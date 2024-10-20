import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/portfolio",
  {
    text: "数据库",
    icon: "/assets/icon/database.svg",
    link: "/database/",
  },
  {
    text: "前端",
    icon: "/assets/icon/front.svg",
    prefix: "/front/",
    children: ["vue/"]
  },
  {
    text: "实用技术",
    icon: "/assets/icon/technology.svg",
    prefix: "/technology/",
    children: [
      {
        text: "Markdown",
        icon: "/assets/icon/markdown.svg",
        link: 'markdown/',
      },
      {
        text: "云服务",
        icon: "/assets/icon/aws.svg",
        link: 'aws/',
      },
      {
        text: "Cloudflare",
        icon: "/assets/icon/cloudflare.svg",
        link: 'cloudflare/',
      },
    ]
  },
  "/remarks",
  {
    text: "变更日志",
    icon: "/assets/icon/changeLog.svg",
    link: "/changeLog"
  },
]);
