# 轻量级 `markdown` 阅读器 浏览器端渲染

https://github.com/masx200/markdown-reader

使用 `typescript` 编写

使用自定义 `hash` 路由模式，来跳转 markdown 页面

新版:使用 `Vue` 重构，加上`@vue/composition-api`

现在已经完全删除 `jQuery`的使用

Lightweight Markdown Documentation System

轻量级 `markdown` 文档系统的纯前端实现

文档处于 `markdown` 状态,无需构建过程（在浏览器上呈现 `markdown` 文件）

使用`marked`转换`markdwown`文件,使用`highlitght.js` 高亮代码

预先加载 目录 当中的 `markdwon` 文件到 预加载,来提升加载速度

新版:使用 `@masx200/webpack-react-vue-spa-awesome-config` 打包

优化界面展示方式,使用 侧边栏 可折叠的导航栏和响应式布局和 cdn 加载依赖包

使用 `css` 媒体查询的侧边栏 ,`flex` 布局的导航栏和响应式布局

使用了固定在顶部的导航栏,给导航栏设置最大高度 100%,并自动显示滚动条

添加 md 文件互相引用的处理，添加 md 文件引用图片的处理，

根据目录的 md 文件生成侧边栏，添加前后翻页按钮

删除不好用的 `mathjax`

使用`clipboard`给`markdown`中的代码添加复制功能

<hr></hr>

受到 `ditto` 的启发,魔改而成

https://github.com/chutsu/ditto

[目录](summary.md)

<hr></hr>

## 使用方法

安装模块

```
pnpm install
```

开发运行

```

yarn tsc

yarn start
```

打包构建

```
yarn tsc

yarn build
```

打包之后的文件存放在`dist`目录下，可直接部署到云服务器上

## 自定义配置

https://github.com/masx200/markdown-reader/blob/master/src/index.ts

`maintitle`:文档主要标题

`subtitle`:文档副标题

`homepage`:文档首页的 markdown 文件

`catalogue`:文档目录的 markdown 文件

`baseurl`:文档所在的基础 URL 路径，必须是绝对路径，

如果文档在同一个目录下，可设置为`location.href`
