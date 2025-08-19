import 'dotenv/config';
import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "我的网站",
  tagline: "恐龙很酷",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://pandaymx.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "pandaymx", // Your GitHub用户名
  projectName: "pandaymx.github.io", // 你的仓库名

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    // 使用简体中文作为默认语言
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },
  plugins: [
    // 仅在非 CI 环境启用 rsdoctor
    !process.env.CI && [
      "rsdoctor",
      {
        rsdoctorOptions: {
          mode: "lite",
        },
      },
    ],
  ].filter(Boolean),
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: process.env.GTAG_TRACKING_ID,
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    announcementBar: {
      id: 'blog_building',
      content:
        '本站博客正在快速构建中，请安心等待，敬请期待！',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "我的网站",
      logo: {
        alt: "网站徽标",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "csSidebar",
          position: "left",
          label: "计算机科学",
        },
        {
          type: "docSidebar",
          sidebarId: "toolSidebar",
          position: "left",
          label: "实用工具",
        },
        { to: "/blog", label: "博客", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            {
              label: "计算机科学与技术",
              to: "/docs/cs/",
            },
          ],
        },
        {
          title: "社区",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "博客",
              to: "/blog",
            },
            {
              label: "源码",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 本站. 使用 Docusaurus 构建。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["java", "csharp"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
