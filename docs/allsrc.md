# 查看所有源代码

## index.html
```html
 <!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            * {
                font-family: "Microsoft Yahei,PingFangSC-Regular,arial, verdana, sans-serif"
            }
        </style>
        <title>ditto Lightweight Markdown Documentation System </title>
        <script src="https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.staticfile.org/jqueryui/1.12.1/jquery-ui.min.js"></script>
        <script src="https://cdn.staticfile.org/marked/0.6.2/marked.min.js"></script>
        <link rel="stylesheet" href="github.css">
        <script src="https://cdn.staticfile.org/highlight.js/9.15.6/highlight.min.js"></script>
        <script type="text/x-mathjax-config">
            
        MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [['$','$']],
          processRefs: true
        },
        TeX: {
          equationNumbers: {
            autoNumber: "all",
            formatID: function(id) { return "(" + id  + ")"},
            formatURL: function(id) { return null }
          }
        }
      });
    
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/extensions/MathMenu.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/extensions/MathZoom.js"></script>
        <link rel="stylesheet" href="ditto.css">
        <script src="ditto.js"></script>
        <script src="https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js"></script>
        <script src="https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </head>
    <body>
        <noscript>Your browser does not support JavaScript!</noscript>
        <div class="container-fluid">
            <nav class="navbar navbar-expand-sm bg-light navbar-light">
                <a class="navbar-brand" href="https://masx200.github.io/index.html">masx200的github主页 </a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#README">ditto</a>
                    </li>
                </ul>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <div id="sidebar" class="navbar-nav"></div>
                </div>
            </nav>
        </div>
        <div class="container">
            <div id="content"></div>
            <div id="hide"></div>
            <div id="back_to_top">top</div>
            <div id="loading">Loading ...</div>
            <div id="error"></div>
        </div>
        <script>
            function t() {
                "" !== location.hash && "#" !== location.hash || (location.hash = "#README")
            }
            $(function(t) {
                ditto.index = "README.md",
                ditto.sidebar_file = "sidebar.md",
                ditto.github_username = "masx200",
                ditto.github_repo = "ditto",
                ditto.highlight_code = !0,
                ditto.run()
            }),
            $(window).on("hashchange", t);
        </script>
    </body>
</html>
```

## ditto.js
```javascript
$(function ($) {

    var ditto = {
        content_id: $("#content"),
        sidebar_id: $("#sidebar"),

        edit_id: $("#edit"),
        back_to_top_id: $("#back_to_top"),

        loading_id: $("#loading"),
        error_id: $("#error"),

        search_name: $("#search"),
        search_results_class: ".search_results",
        fragments_class: ".fragments",
        fragment_class: ".fragment",

        highlight_code: true,

        // display elements
        sidebar: true,
        edit_button: true,
        back_to_top_button: true,
        searchbar: true,

        // github specifics
        github_username: null,
        github_repo: null,

        // initialize function
        run: initialize
    };

    function initialize() {
        // initialize sidebar and buttons
        if (ditto.sidebar) {
            init_sidebar_section();
        }

        if (ditto.back_to_top_button) {
            init_back_to_top_button();
        }

        if (ditto.edit_button) {
            init_edit_button();
        }

        // intialize highligh.js
        if (ditto.highlight_code) {
            hljs.initHighlightingOnLoad();
        }

        // page router
        router();
        $(window).on('hashchange', router);
    }

    function init_sidebar_section() {
        $.get(ditto.sidebar_file, function (data) {
            ditto.sidebar_id.html(marked(data));

            if (ditto.searchbar) {
                init_searchbar();
            }

//由于当作bootstrap导航栏,所以给sidebar中的ul增加class为"navbar-nav"
            $("#sidebar > ul").addClass("navbar-nav")
            $("#sidebar > h1").addClass("nav-item")
            $("#sidebar > p").addClass("nav-item")
            $("#sidebar > p>a").addClass("nav-link")
            $("#sidebar > h2").addClass("nav-item")
            $("#sidebar > li").addClass("nav-item")
            $("#sidebar > a").addClass("nav-link")
            $("#sidebar >ul> li").addClass("nav-item")
            // nav-item

        }, "text").fail(function () {
            alert("Opps! can't find the sidebar file to display!");
        });

    }

    function init_back_to_top_button() {
        ditto.back_to_top_id.show();
        ditto.back_to_top_id.on("click", function () {
            $("body, html").animate({
                scrollTop: 0
            }, 200);
        });
    }

    function init_edit_button() {
        if (ditto.base_url === null) {
            alert("Error! You didn't set 'base_url' when calling ditto.run()!");

        } else {
            ditto.edit_id.show();
            ditto.edit_id.on("click", function () {
                var hash = location.hash.replace("#", "/");

                if (hash === "") {
                    hash = "/" + ditto.index.replace(".md", "");
                }

                window.open(ditto.base_url + hash + ".md");
                // open is better than redirecting, as the previous page history
                // with redirect is a bit messed up
            });
        }
    }

    function init_searchbar() {
        var sidebar = ditto.sidebar_id.html();
        var match = "[ditto:searchbar]";

        // html input searchbar
        var search = "<input name='" + ditto.search_name.selector + "'";
        search = search + " type='search'";
        search = search + " results='10'>";

        // replace match code with a real html input search bar
        sidebar = sidebar.replace(match, search);
        ditto.sidebar_id.html(sidebar);

        // add search listener
        $("input[name=" + ditto.search_name.selector + "]").keydown(searchbar_listener);
    }

    function build_text_matches_html(fragments) {
        var html = "";
        var class_name = ditto.fragments_class.replace(".", "");

        html += "<ul class='" + class_name + "'>";
        for (var i = 0; i < fragments.length; i++) {
            var fragment = fragments[i].fragment.replace("/[\uE000-\uF8FF]/g", "");
            html += "<li class='" + ditto.fragment_class.replace(".", "") + "'>";
            html += "<pre><code> ";
            fragment = $("#hide").text(fragment).html();
            html += fragment;
            html += " </code></pre></li>";
        }
        html += "</ul>";

        return html;
    }

    function build_result_matches_html(matches) {
        var html = "";
        var class_name = ditto.search_results_class.replace(".", "");

        html += "<ul class='" + class_name + "'>";
        for (var i = 0; i < matches.length; i++) {
            var url = matches[i].path;

            if (url !== ditto.sidebar_file) {
                var hash = "#" + url.replace(".md", "");
                var path = window.location.origin + "/" + hash;

                // html += "<li>";
                html += "<li class='link'>";
                html += url;
                // html += "<a href='" + path +"'>" + url + "</a>";
                html += "</li>";

                var match = build_text_matches_html(matches[i].text_matches);
                html += match;
            }

        }
        html += "</ul>";

        return html;
    }

    function display_search_results(data) {
        var results_html = "<h1>Search Results</h1>";

        if (data.items.length) {
            hide_errors();
            results_html += build_result_matches_html(data.items);
        } else {
            show_error("Opps.. Found no matches!");
        }

        ditto.content_id.html(results_html);
        $(ditto.search_results_class + " .link").click(function () {
            var destination = "#" + $(this).html().replace(".md", "");
            location.hash = destination;
        });
    }

    function github_search(query) {
        if (ditto.github_username && ditto.github_repo) {
            // build github search api url string
            var github_api = "https://api.github.com/";
            var search = "search/code?q=";
            var github_repo = ditto.github_username + "/" + ditto.github_repo;
            var search_details = "+in:file+language:markdown+repo:";

            var url = github_api + search + query + search_details + github_repo;
            var accept_header = "application/vnd.github.v3.text-match+json";

            $.ajax(url, { headers: { Accept: accept_header } }).done(function (data) {
                display_search_results(data);
            });
        }

        if (ditto.github_username == null && ditto.github_repo == null) {
            alert("You have not set ditto.github_username and ditto.github_repo!");
        } else if (ditto.github_username == null) {
            alert("You have not set ditto.github_username!");
        } else if (ditto.github_repo == null) {
            alert("You have not set ditto.github_repo!");
        }
    }

    function searchbar_listener(event) {
        if (event.which === 13) {  // when user presses ENTER in search bar
            var q = $("input[name=" + ditto.search_name.selector + "]").val();
            if (q !== "") {
                location.hash = "#search=" + q;
            } else {
                alert("Error! Empty search query!");
            }
        }
    }

    function replace_symbols(text) {
        // replace symbols with underscore
        return text.replace(/[&\/\\#,+=()$~%.'":*?<>{}\ \]\[]/g, "_");
    }

    function li_create_linkage(li_tag, header_level) {
        // add custom id and class attributes
        html_safe_tag = replace_symbols(li_tag.text());
        li_tag.attr("id", html_safe_tag);
        li_tag.attr("class", "link");

        // add click listener - on click scroll to relevant header section
        $(ditto.content_id.selector + " li#" + li_tag.attr("id")).click(function () {
            // scroll to relevant section
            var header = $("h" + header_level + "." + li_tag.attr("id"));
            $('html, body').animate({
                scrollTop: header.offset().top
            }, 200);

            // highlight the relevant section
            original_color = header.css("color");
            header.animate({ color: "#ED1C24", }, 500, function () {
                // revert back to orig color
                $(this).animate({ color: original_color }, 2500);
            });
        });
    }

    function create_page_anchors() {
        // create page anchors by matching li's to headers
        // if there is a match, create click listeners
        // and scroll to relevant sections

        // go through header level 2 and 3
        for (var i = 2; i <= 4; i++) {
            // parse all headers
            var headers = [];
            $(ditto.content_id.selector + ' h' + i).map(function () {
                headers.push($(this).text());
                $(this).addClass(replace_symbols($(this).text()));
            });

            // parse and set links between li and h2
            $(ditto.content_id.selector + ' ul li').map(function () {
                for (var j = 0; j < headers.length; j++) {
                    if (headers[j] === $(this).text()) {
                        li_create_linkage($(this), i);
                    }
                }
            });
        }
    }

    function youtube_url_extract(data) {
        var yt_regex = /(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+/g;
        var yt_url = String(data.match(yt_regex));
        yt_url = yt_url.replace(/]/g, "");
        return yt_url;
    }

    function youtube_url_to_embed(data) {
        return data = data.replace(/watch\?v\=/g, "embed/");
    }

    function create_youtube_embeds(data) {
        // replaces [ditto:youtube:<some youtube link>]
        // with a proper youtube embed iframe
        var token_regex = /\[ditto\:youtube:(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+\]/g;
        var yt_url = youtube_url_extract(data);
        var yt_embed_url = youtube_url_to_embed(yt_url);

        // youtube embed html
        var embed_html = `<div class="youtube_video">
      <div style="position:relative;height:0;padding-bottom:56.25%">
        <iframe src="<link>?ecver=2"
          width="640"
          height="360"
          frameborder="0"
          style="position:absolute;width:100%;height:100%;left:0"
          allowfullscreen>
        </iframe>
      </div>
    </div>`;
        embed_html = embed_html.replace("<link>", yt_embed_url);

        // replace match code with youtube video
        data = data.replace(token_regex, embed_html);
        return data;
    }

    function normalize_paths() {
        // images
        ditto.content_id.find("img").map(function () {
            var src = $(this).attr("src").replace(/^\.\//, "");
            if ($(this).attr("src").slice(0, 5) !== "http") {
                var url = location.hash.replace("#", "");

                // split and extract base dir
                url = url.split("/");
                var base_dir = url.slice(0, url.length - 1).join("/");

                // normalize the path (i.e. make it absolute)
                if (base_dir) {
                    $(this).attr("src", base_dir + "/" + src);
                } else {
                    $(this).attr("src", src);
                }
            }
        });

    }

    function show_error(err_msg) {
        ditto.error_id.html(err_msg);
        ditto.error_id.show();
    }

    function hide_errors() {
        ditto.error_id.hide();
    }

    function show_loading() {
        ditto.loading_id.show();
        ditto.content_id.html("");  // clear content

        // infinite loop until clearInterval() is called on loading
        ditto.loading_interval = setInterval(function () {
            ditto.loading_id.fadeIn(1000).fadeOut(1000);
        }, 2000);

    }

    function stop_loading() {
        clearInterval(ditto.loading_interval);
        ditto.loading_id.hide();
    }

    function escape_github_badges(data) {
        $("img").map(function () {
            var ignore_list = [
                "travis-ci.com",
                "travis-ci.org",
                "coveralls.io"
            ];
            var src = $(this).attr("src");

            var base_url = src.split("/");
            var protocol = base_url[0];
            var host = base_url[2];

            if ($.inArray(host, ignore_list) >= 0) {
                $(this).attr("class", "github_badges");
            }
        });
        return data;
    }

    function page_getter() {
        window.scrollTo(0, 0);
        var path = location.hash.replace("#", "./");

        // default page if hash is empty
        var current_page = location.pathname.split("/").pop();
        if (current_page === "index.html") {
            path = location.pathname.replace("index.html", ditto.index);
            normalize_paths();

        } else if (path === "") {
            path = window.location + ditto.index;
            normalize_paths();

        } else {
            path = path + ".md";

        }

        // otherwise get the markdown and render it
        show_loading();
        $.get(path, function (data) {
            compile_into_dom(path, data, function () {
                // rerender mathjax and reset mathjax equation counter
                if (MathJax && MathJax.Extension["Tex/AMSmath"]) {
                    MathJax.Extension["TeX/AMSmath"].startNumber = 0;
                    MathJax.Extension["TeX/AMSmath"].labels = {};

                    var content = document.getElementById("content");
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, content]);
                }
            });
        }).fail(function () {
            console.error("Opps! ... File not found!\n5秒后返回主页")
            show_error("Opps! ... File not found!\n5秒后返回主页");
            stop_loading();
            setTimeout(()=>{
                location.hash="#"
            },5000)
        });
    }

    function escape_html(string) {
        return string
            .replace(/\\/g, "&#92;")
            .replace(/\_/g, "&#95;");
    }

    function unescape_html(string) {
        return string
            .replace(/&amp;#92;/g, "\\")
            .replace(/&amp;#95;/g, "_");
    }

    function compile_into_dom(path, data, cb) {
        hide_errors();

        data = create_youtube_embeds(data);
        data = marked(escape_html(data));
        data = unescape_html(data);
        ditto.content_id.html(data);

        stop_loading();
        escape_github_badges(data);

        normalize_paths();
        create_page_anchors();

        if (ditto.highlight_code) {
            $('pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
        }

        if (cb) {
            cb(data);
        }
    }

    function router() {
        var hash = location.hash;

        if (hash.slice(1, 7) !== "search") {
            page_getter();

        } else {
            if (ditto.searchbar) {
                github_search(hash.replace("#search=", ""));
            }

        }
    }

    window.ditto = ditto;
});

```
## ditto.css
```css
body {
    color: #333;
    margin: 0;
    padding: 0
}

#sidebar {
    overflow: -moz-scrollbars-vertical;
    margin-right: 20px;
    margin-top: 0;
    padding-left: 25px;
    padding-top: 0;
    border-right: 1px solid #bbb
}

#sidebar h1 {
    margin-bottom: 0;
    padding-bottom: 0
}

#sidebar h1 a:link,#sidebar h1 a:visited {
    color: #333
}

#sidebar h5 {
    margin-top: 20px;
    margin-bottom: 0
}

#sidebar a:link,#sidebar a:visited {
    color: #4682be;
    text-decoration: none
}

#sidebar ul {
    list-style-type: none;
    margin: 0;
    padding-left: 10px;
    padding-top: 0
}

#sidebar ul li:before {
    /* content: "-"; */
    position: relative;
    left: -5px
}

#sidebar ul li {
    margin-top: 0;
    margin-bottom: 2px;
    margin-left: 10px;
    padding: 0;
    text-indent: -5px
}

#content {
    padding-top: 10px;
    padding-bottom: 150px;
    text-align: justify;
    font-size: 1em
}

#content pre {
    margin-left: auto;
    margin-right: auto;
    padding: 10px 13px;
    color: #fff;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    background: #f7fafb;
    border-radius: 5px
}

#content pre code {
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    font-size: 1.1em;
    border: none
}

#content code {
    padding: 1px 5px;
    color: #555;
    font-size: 10px;
    font-weight: 400;
    background: #f7fafb;
    border: 1px solid #e3edf3;
    border-radius: 2px
}

#content h2 {
    font-size: 18px;
    border-top: 2px solid #666
}

#content h2,#content h3 {
    margin-top: 50px;
    margin-bottom: 0;
    padding-top: 20px;
    padding-bottom: 0;
    text-align: left
}

#content h3 {
    border-top: 1px dotted #777
}

#content hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0,0,0,.1);
    border-bottom: 1px solid hsla(0,0%,100%,.3)
}

#content img {
    max-width: 90%;
    display: block;
    margin: 40px auto;
    border-radius: 5px
}

#content ul {
    display: block;
    list-style-type: none
}

#content ul li:before {
    /* content: "-"; */
    position: relative;
    left: -5px
}

#content ul li {
    text-indent: -5px;
    font-size: 13px
}

#content ul li.link {
    font-size: 13px;
    font-weight: 700;
    cursor: pointer
}

#content a:link,#content a:visited,#content ul li.link {
    color: #4682be;
    text-decoration: none
}

#back_to_top {
    display: none;
    position: fixed;
    height: 20px;
    line-height: 20px;
    width: 50px;
    top: 20px;
    margin-left: 890px;
    color: #fff;
    vertical-align: middle;
    text-align: center;
    font-size: 10px;
    border-radius: 5px;
    background-color: #aaa
}

#back_to_top:hover {
    background-color: #444;
    cursor: pointer
}

#edit {
    display: none;
    position: fixed;
    height: 20px;
    line-height: 20px;
    width: 50px;
    top: 50px;
    margin-left: 890px;
    color: #fff;
    vertical-align: middle;
    text-align: center;
    font-size: 10px;
    border-radius: 5px;
    background-color: #aaa
}

#edit:hover {
    background-color: #444;
    cursor: pointer
}

#error,#loading {
    display: none;
    position: fixed;
    height: 17px;
    top: 45%;
    margin-left: 560px;
    font-size: 14px;
    font-weight: 700
}

input[type=search] {
    display: block;
    width: 100%;
    text-align: left
}

.fragments {
    margin: 0;
    padding: 10px
}

.fragment {
    padding: 0 10px
}

.search_results .link {
    margin-top: 35px
}

#content ul li {
    text-align: left
}

#content ul .fragments li:before {
    /* content: ""; */
    position: relative;
    left: 0
}

#content ul li.fragment:before {
    /* content: ""; */
    margin: 0;
    padding: 0
}

#content img.github_badges {
    display: inline
}

#content .youtube_video {
    margin-top: 20px
}

#hide {
    display: none
}


```

## github.css
```css
.hljs {
    display: block;
    overflow-x: auto;
    padding: .5em;
    color: #333;
    background: #f8f8f8;
    -webkit-text-size-adjust: none
}

.diff .hljs-header,.hljs-comment {
    color: #998;
    font-style: italic
}

.css .rule .hljs-keyword,.hljs-keyword,.hljs-request,.hljs-status,.hljs-subst,.hljs-winutils,.nginx .hljs-title {
    color: #333;
    font-weight: 700
}

.hljs-hexcolor,.hljs-number,.ruby .hljs-constant {
    color: teal
}

.hljs-doctag,.hljs-string,.hljs-tag .hljs-value,.tex .hljs-formula {
    color: #d14
}

.hljs-id,.hljs-title,.scss .hljs-preprocessor {
    color: #900;
    font-weight: 700
}

.hljs-list .hljs-keyword,.hljs-subst {
    font-weight: 400
}

.hljs-class .hljs-title,.hljs-type,.tex .hljs-command,.vhdl .hljs-literal {
    color: #458;
    font-weight: 700
}

.django .hljs-tag .hljs-keyword,.hljs-rule .hljs-property,.hljs-tag,.hljs-tag .hljs-title {
    color: navy;
    font-weight: 400
}

.hljs-attribute,.hljs-name,.hljs-variable,.lisp .hljs-body {
    color: teal
}

.hljs-regexp {
    color: #009926
}

.clojure .hljs-keyword,.hljs-prompt,.hljs-symbol,.lisp .hljs-keyword,.ruby .hljs-symbol .hljs-string,.scheme .hljs-keyword,.tex .hljs-special {
    color: #990073
}

.hljs-built_in {
    color: #0086b3
}

.hljs-cdata,.hljs-doctype,.hljs-pi,.hljs-pragma,.hljs-preprocessor,.hljs-shebang {
    color: #999;
    font-weight: 700
}

.hljs-deletion {
    background: #fdd
}

.hljs-addition {
    background: #dfd
}

.diff .hljs-change {
    background: #0086b3
}

.hljs-chunk {
    color: #aaa
}


```
