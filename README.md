# 轻量级 markdown 阅读器 浏览器端渲染

https://github.com/masx200/markdown-reader

新版:使用 Vue 重构,取代之前用 JQuery

Lightweight Markdown Documentation System based on ditto

轻量级 markdown 文档系统的纯前端实现

文档处于 markdown 状态

无需构建过程（在浏览器上呈现 markdown 文件）

预先加载 目录 当中的 markdwon 文件到 预加载,来提升加载速度

新版:使用 `@masx200/webpack-react-vue-spa-awesome-config` 打包

优化界面展示方式,使用 侧边栏 可折叠的导航栏和响应式布局和 cdn 加载依赖包

使用 媒体查询的侧边栏 可折叠的导航栏和响应式布局

使用了固定在顶部的导航栏,给导航栏设置最大高度 100%,并自动显示滚动条

添加 md 文件互相引用的处理，添加 md 文件引用图片的处理，

根据目录的 md 文件生成侧边栏，添加翻页按钮

删除不好用的 mathjax

受到 `ditto` 的启发,魔改而成

<hr></hr>

[目录](summary.md)

<hr></hr>

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
