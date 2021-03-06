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

新版:使用 [@masx200/webpack-react-vue-spa-awesome-config](https://www.npmjs.com/package/@masx200/webpack-react-vue-spa-awesome-config) 打包

优化界面展示方式,使用 侧边栏 可折叠的导航栏和响应式布局和 cdn 加载依赖包

使用 `css` 媒体查询的侧边栏 ,`flex` 布局的导航栏和响应式布局

使用了固定在顶部的导航栏,给导航栏设置最大高度 100%,并自动显示滚动条

添加 md 文件互相引用的处理，添加 md 文件引用图片的处理，可以使用相对路径引入图片

根据目录的 md 文件生成侧边栏，

添加前后翻页按钮,并设置翻页链接

删除不好用的 `mathjax`

使用`clipboard`给`markdown`中的代码添加复制功能

加载完 `markdown` 文件后给当前页的链接添加活跃样式

给标头元素添加了锚点链接,并且可从`location.hash`中解析要跳转到的元素

[目录](summary.md)

## 使用方法

安装模块

```shell
pnpm install
```

开发运行

```shell
yarn start
```

打包构建

```shell
yarn build
```

打包之后的文件存放在`dist`目录下，可直接部署到云服务器上

## 目录写法

```markdown
-   [Documentation 1](docs/document_1.md)
-   [Documentation 2](docs/document_2.md)
-   [Documentation 3](docs/document_3.md)
```

## 自定义配置

https://github.com/masx200/markdown-reader/blob/master/src/config.ts

`maintitle`:文档主要标题

`homepage`:文档首页的 markdown 文件,也可以是个绝对路径

`catalogue`:文档目录的 markdown 文件,也可以是个绝对路径

`baseurl`:文档所在的基础 URL 路径，必须是绝对路径，

如果文档在同一个目录下，可设置`baseurl`为`location.href`

如果 `homepage`和`catalogue`都是绝对路径,那么`baseurl`无论是什么都没关系.

目录中的链接都基于目录的路径解析

## 无需打包的使用方式

使用查询参数直接访问您的文档在线阅读

直接将自定义配置中的几个选项传入到查询参数中即可!

例子:

https://masx200.github.io/markdown-reader/?baseurl=https://masx200.github.io/typescript-book-chinese/&catalogue=catalogue.md&homepage=README.md&maintitle=%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3TypeScript

https://masx200.github.io/markdown-reader/?baseurl=https://masx200.github.io/javascript-tutorial/&homepage=README.md&catalogue=summary.md&maintitle=JavaScript%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B

https://masx200.github.io/markdown-reader/?maintitle=ECMAScript6%E5%85%A5%E9%97%A8&homepage=README.md&catalogue=SUMMARY.md&baseurl=https://masx200.github.io/es6tutorial/

https://masx200.github.io/markdown-reader/?maintitle=TypeScript%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B&homepage=README.md&catalogue=SUMMARY.md&baseurl=https://masx200.github.io/typescript-tutorial/

# 受到启发

受到 `ditto` 的启发

https://github.com/chutsu/ditto
