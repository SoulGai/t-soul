import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";
import markdownItPlantuml from 'markdown-it-plantuml';


export default hopeTheme({
  headerDepth: 5,
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "nikita",
    url: "https://github.com/SoulGai",
  },

  iconAssets: "iconify",

  logo: "/logo.svg",

  repo: "SoulGai/t-soul",

  docsDir: "src",
  

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Default footer",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "默认页脚",

      displayFooter: true,      
  
      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
      
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
    
  },
  plugins: {
    // You should generate and use your own comment service
    comment: {
      provider: "Giscus", // 评论服务提供商，这里使用 Giscus
      repo: "vuepress-theme-hope/giscus-discussions", // 存储评论的 GitHub 仓库
      repoId: "R_kgDOG_Pt2A", // 存储评论的 GitHub 仓库 ID
      category: "Announcements", // 评论分类
      categoryId: "DIC_kwDOG_Pt2M4COD69", // 评论分类 ID
      
    },
    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true, // 启用对齐插件，用于对齐表格和图像
      attrs: true, // 启用属性插件，允许在标签上设置属性
      chart: true, // 启用图表插件，用于绘制图表
      codetabs: true, // 启用代码选项卡插件，用于创建多个代码选项卡
      demo: true, // 启用演示插件，用于嵌入演示示例
      echarts: true, // 启用 ECharts 插件，用于绘制 ECharts 图表
      figure: true, // 启用图文插件，用于创建图文混排的布局
      flowchart: true, // 启用流程图插件，用于绘制流程图
      gfm: true, // 启用 GFM（GitHub Flavored Markdown）插件，支持 GFM 语法
      imgLazyload: true, // 启用图片懒加载插件，延迟加载页面中的图片
      imgSize: true, // 启用图片尺寸插件，自动获取并显示图片的宽度和高度
      include: true, // 启用 include 插件，用于插入其他 Markdown 文件的内容
      katex: true, // 启用 KaTeX 插件，用于显示数学公式
      mark: true, // 启用标记插件，用于标记文本
      mermaid: true, // 启用 Mermaid 插件，用于绘制 Mermaid 流程图和时序图
      playground: {
        presets: ["ts", "vue"],// 启用 Playground 插件，并指定预设语言
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],// 启用演示模式插件，并指定启用的功能
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],// 启用样式化插件，用于自定义样式
      sub: true, // 启用下标插件，用于显示下标
      sup: true, // 启用上标插件，用于显示上标
      tabs: true, // 启用选项卡插件，用于创建多个内容选项卡
      vPre: true, // 启用 v-pre 插件，用于原样显示包含 Vue 代码的标签
      vuePlayground: true, // 启用 Vue Playground 插件，用于在 Markdown 中编写 Vue 组件
      
      // // 添加 markdown-it-plantuml 插件
      // markdownIt: (md) => {
      //   return md.use(markdownItPlantuml);
      // },
    },

    // uncomment these if you want a pwa
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/junit5-logo.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
