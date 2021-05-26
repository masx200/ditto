#  轻量级 markdown 阅读器 浏览器端渲染

新版:使用 Vue 重构,取代之前用 JQuery

Lightweight Markdown Documentation System based on ditto

轻量级 markdown 文档系统的纯前端实现

文档处于 markdown 状态

无需构建过程（在浏览器上呈现 markdown 文件）

可通过 GitHub 页面部署

预先加载 目录 当中的 markdwon 文件到 预加载,来提升加载速度

新版:使用 webpack-react-vue-spa-awesome-config 打包

https://github.com/masx200/markdown-reader

# 优化界面展示方式,使用 侧边栏 可折叠的导航栏和响应式布局和 cdn 加载依赖包

## 使用 媒体查询的侧边栏 可折叠的导航栏和响应式布局

使用了固定在顶部的导航栏,给导航栏设置最大高度 100%,并自动显示滚动条

受到 `ditto` 的启发,魔改而成

# ditto

https://github.com/chutsu/ditto

`ditto` inspired by [flatdoc](http://ricostacruz.com/flatdoc/) is a markdown code
documentation system, capable of producing documentation similar to
[Three.js][2] and [Backbone.js][3], check out live demo [here][1]. It is
designed for people who use Github Pages to host their code documentation, but
you can also host it yourself.

You want to use ditto because

-   Docs are in markdown
-   No build process needed (markdown files are rendered on the browser)
-   Deployable via GitHub Pages
