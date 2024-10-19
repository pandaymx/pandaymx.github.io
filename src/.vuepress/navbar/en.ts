import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Technology",
    icon: "/assets/icon/technology.svg",
    prefix: "/en/technology/",
    children: [
      {
        text: "Markdown",
        icon: "/assets/icon/markdown.svg",
        link: 'markdown/',
      }
    ]
  },
  {
    text: "ChangeLog",
    icon: "/assets/icon/changeLog.svg",
    link: "/en/changeLog"
  },
]);
