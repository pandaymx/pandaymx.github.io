import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/portfolio",
  {
    text: "Java",
    icon: "/assets/icon/java.svg",
    link: "/java/",
  },
  {
    text: "数据库",
    icon: "/assets/icon/database.svg",
    prefix: "/database/",
    children: ["redis/"],
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
    children: ["markdown/","wsl/","linux/","docker/","aws/","cloudflare/"]
  },
  {
    text: "人工智能",
    icon: "/assets/icon/ai.svg",
    prefix: "/ai/",
    children: ["nvidia/"]
  },
  "/remarks",
  {
    text: "变更日志",
    icon: "/assets/icon/changeLog.svg",
    link: "/changeLog"
  },
]);
