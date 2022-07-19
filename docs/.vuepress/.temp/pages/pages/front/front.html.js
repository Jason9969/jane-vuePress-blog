export const data = {
  "key": "v-4a0ad91a",
  "path": "/pages/front/front.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "vue3+ts+webpack5打包发布npm",
      "slug": "vue3-ts-webpack5打包发布npm",
      "children": [
        {
          "level": 3,
          "title": "新建项目",
          "slug": "新建项目",
          "children": []
        },
        {
          "level": 3,
          "title": "安装webpack和webpack-cli",
          "slug": "安装webpack和webpack-cli",
          "children": []
        },
        {
          "level": 3,
          "title": "初始化设置",
          "slug": "初始化设置",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "pages/front/front.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
