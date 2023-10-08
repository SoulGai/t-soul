import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import markdownItPlantuml from 'markdown-it-plantuml'


export default defineUserConfig({
  base: "/",
  shouldPrefetch: false,
  markdown: {
    headers:{
      level: [2, 3, 4, 5, 6]
    },
    
  },
  locales: {
    "/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "教程",
      description: "教程",
    },
  },

  theme,

  // 扩展 Markdown
  extendsMarkdown: (md) => {
    md.use(markdownItPlantuml,  {
          openMarker: '```plantuml',
          closeMarker: '```',
        })
  },
  

});
 