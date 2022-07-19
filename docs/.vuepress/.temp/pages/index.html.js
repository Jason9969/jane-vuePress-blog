export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "/images/symbol-defs.png",
    "heroText": "Jane's Site",
    "tagline": "Hello New World!",
    "features": [
      {
        "title": "休闲 Leisure",
        "details": "这里没有休闲，只有学习"
      },
      {
        "title": "娱乐 Amusement",
        "details": "这里没有娱乐，只有学习"
      },
      {
        "title": "知识 Knowledge",
        "details": "心如止水，学无止境"
      }
    ],
    "footer": "by Jane"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1655175610000,
    "contributors": [
      {
        "name": "梁皓明",
        "email": "93623@runjian.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "README.md"
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
