# How do I use ditto?

Contents:

- File Structure
- index.html
- sidebar.md
- README.md

## File Structure

`ditto` expects the file structure of your documentation website to look
something like this:

    index.html
    sidebar.md
    README.md
    docs/  # insert markdown files here!

## index.html

**NOTE**: Before you create the `index.html` file, please know that `ditto`
requires a http server for the documentation to be pulled down. If you're using
`gh-pages` in your github, just push this `index.html` along with other files
discussed in section `File Structure` to your `gh-pages` branch on github to
host your files.

[Download][index_file](<- right-click "Save as") or copy the following code
snippet and save it as `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.staticfile.org/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      * {
        font-family: "Microsoft Yahei,PingFangSC-Regular,arial, verdana, sans-serif";
      }
    </style>
    <title>ditto Lightweight Markdown Documentation System</title>
    <script src="https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.staticfile.org/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="https://cdn.staticfile.org/marked/0.6.2/marked.min.js"></script>
    <link rel="stylesheet" href="github.css" />
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
    <link rel="stylesheet" href="ditto.css" />
    <script src="ditto.js"></script>
    <script src="https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js"></script>
    <script src="https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
  </head>
  <body>
    <noscript>Your browser does not support JavaScript!</noscript>
    <div class="container-fluid">
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <a class="navbar-brand" href="https://masx200.github.io/index.html"
          >masx200的github主页
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#README">ditto</a>
          </li>
        </ul>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
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
        ("" !== location.hash && "#" !== location.hash) ||
          (location.hash = "#README");
      }
      $(function (t) {
        (ditto.index = "README.md"),
          (ditto.sidebar_file = "sidebar.md"),
          (ditto.github_username = "masx200"),
          (ditto.github_repo = "ditto"),
          (ditto.highlight_code = !0),
          ditto.run();
      }),
        $(window).on("hashchange", t);
    </script>
  </body>
</html>
```

Edit:

- `ditto.index`
- `ditto.sidebar_file`
- `ditto.github_username`
- `ditto.github_repo`
- `ditto.base_url`

as you see fit.

## sidebar.md

In the `sidebar.md` file you can create links to documentation you wish to list
(just as you would in markdown). You have to list them in the form:

    #folder_containing_docs/file_name_without_extension

For example:

    - [Documentation 1](#docs/document_1)
    - [Documentation 2](#docs/document_2)
    - [Documentation 3](#docs/document_3)

If you want the GitHub search bar enter the following in the same file:

    [ditto:searchbar]

**IMPORTANT NOTE**:

- **This will only search markdown files in your repo's master branch.**
- Add `#` infront of `docs`, where `docs` is the folder where `document_1.md` resides
- Also **_DO NOT_** INCLUDE THE FILE EXTENSION AT THE END!

## README.md

Do I really have to tell you what to put in here?

[index_file]: http://raw.githubusercontent.com/chutsu/ditto/master/ver/latest/index.html
