import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Index Team",
  description: "驱动未来，编织精彩",
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as string[],
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as string[],
          formatter: "标签：$content",
        },
      ],
    }),
  ],
});
