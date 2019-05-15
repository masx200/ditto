# ditto
Lightweight Markdown Documentation System based on ditto

轻量级markdown文档系统的纯前端实现

文档处于markdown状态

无需构建过程（在浏览器上呈现markdown文件）

可通过GitHub页面部署

https://github.com/masx200/ditto

使用parcel bundler打包文件
# 优化界面展示方式,使用bootstrap可折叠的导航栏和响应式布局和cdn加载依赖包

https://masx200.github.io/ditto

## 使用bootstrap可折叠的导航栏和响应式布局

使用了固定在顶部的导航栏,给导航栏设置最大高度100%,并自动显示滚动条

修改了index.html,ditto.js,ditto.css

修改 index.html

 修改ditto.js

 在加载完sidebar.md之后,给导航栏里面的元素批量添加class,变成bootstrap导航栏的样式

[查看 index.html源代码](./src/index.html)

[查看ditto.js源代码](./src/ditto.js)
 



## cdn加载依赖包
```
https://cdn.staticfile.org/twitter-bootstrap/4.3.1/css/bootstrap.min.css

https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js

https://cdn.staticfile.org/jqueryui/1.12.1/jquery-ui.min.js

https://cdn.staticfile.org/marked/0.6.2/marked.min.js

https://cdn.staticfile.org/highlight.js/9.15.6/highlight.min.js

https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js

https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/extensions/MathMenu.js

https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/extensions/MathZoom.js

https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js

https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.min.js
```
# ditto

https://github.com/chutsu/ditto

`ditto` inspired by [flatdoc](http://ricostacruz.com/flatdoc/) is a markdown code
documentation system, capable of producing documentation similar to
[Three.js][2] and [Backbone.js][3], check out live demo [here][1]. It is
designed for people who use Github Pages to host their code documentation, but
you can also host it yourself.

You want to use ditto because
- Docs are in markdown
- No build process needed (markdown files are rendered on the browser)
- Deployable via GitHub Pages



## How do I start?
Enter the following command and follow instructions:


    curl -L https://git.io/v6T7r > install.sh && sh install.sh


Or alternatively see this page for [instructions][4].



### LICENSE

The MIT License (MIT)

Copyright (c) 2014 Chris Choi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



[1]: http://chutsu.github.io/ditto
[2]: http://threejs.org/docs/
[3]: http://backbonejs.org/
[4]: http://chutsu.github.io/ditto/#docs/how_do_i_use_ditto
