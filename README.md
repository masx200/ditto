# ditto
Lightweight Markdown Documentation System based on ditto

轻量级markdown文档系统

https://github.com/masx200/ditto

使用parcel bundler打包文件
# 优化界面展示方式,使用bootstrap可折叠的导航栏和响应式布局和cdn加载依赖包

https://masx200.github.io/ditto

## 使用bootstrap可折叠的导航栏和响应式布局


### index.html

```html
 <div class="container-fluid">
        <nav class="navbar navbar-expand-sm bg-light navbar-light">
            <a class="navbar-brand" href="#readme">ditto</a>
             <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#collapsibleNavbar"> 
                <span class="navbar-toggler-icon"></span>
                 </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <!-- <ul class="navbar-nav">
                    <li class="nav-item"> -->
                        <div id="sidebar" class="navbar-nav"></div>
                    <!-- </li>
                </ul> -->


            </div>

        </nav>
    </div>
    
    
    <div class="container">
        <div id="content"></div>
        <div id="hide"></div>

        <!-- OPTIONAL -->
        <div id="back_to_top">top</div>
        <!-- <div id="edit">edit</div> -->
        <div id="loading">Loading ...</div>
        <div id="error"></div>
    </div>
```

### ditto.js

```javascript

    function init_sidebar_section() {
        $.get(ditto.sidebar_file, function (data) {
            ditto.sidebar_id.html(marked(data));

            if (ditto.searchbar) {
                init_searchbar();
            }

//由于当作bootstrap导航栏,所以给sidebar中的ul增加class为"navbar-nav"
            $("#sidebar > ul").addClass("navbar-nav")


        }, "text").fail(function () {
            alert("Opps! can't find the sidebar file to display!");
        });

    }
```

### ditto.css
```css
#sidebar {
    /* position: fixed;
    width: 220px;
    height: 100%; */

    /* overflow-y: scroll; */
    overflow: -moz-scrollbars-vertical;

    margin-right: 20px;
    margin-top: 0;
    padding-left: 25px;
    padding-top: 0;

    box-shadow: 0 0 40px #CCC;
    -webkit-box-shadow: 0 0 40px #CCC;
    -moz-box-shadow: 0 0 40px #CCC;
    border-right: 1px solid #BBB;
}
#content {
    /* width: 580px; */

    /* margin-left: 300px; */
    padding-top: 10px;
    padding-bottom: 150px;

    text-align: justify;
    font-size: 1.0em;
}
input[type=search] {
    display: block;
    /* width: 180px; */
    width: 100%;
    text-align: left;
}
```

## cdn加载依赖包
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
