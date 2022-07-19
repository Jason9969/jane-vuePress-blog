const { defaultTheme } = require("vuepress");
const { searchPlugin } = require("@vuepress/plugin-search");
module.exports = {
  base: "/", // 默认路径
  lang: "zh-CN", // 语言
  title: "Jane的日常零碎", // 网站标题
  theme: defaultTheme({
    navbar: [
      {
        text: "概述",
        link: "/pages/",
      },
    ],
    sidebar: {
      "/pages/": [
        {
          text: "前端",
          collapsible: true,
          children: [
            {
              text: "webpack5打包发布ts库",
              link: "/pages/front/front.md",
            },
          ],
        },
      ],
    },
  }),
};
