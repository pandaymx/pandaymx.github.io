import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/portfolio",
  {
    text: "实用技术",
    icon: "/assets/icon/technology.svg",
    prefix: "/technology/",
    children: [
      {
        text: "Markdown",
        icon: "/assets/icon/markdown.svg",
        link: 'markdown/',
      }
    ]
  },
  "/remarks",
  {
    text: "变更日志",
    icon: "/assets/icon/changeLog.svg",
    link: "/changeLog"
  },
]);
