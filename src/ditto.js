import jQuery from "jquery";
import config from "./config.js";
import { escapemarkedunescape } from "./escapemarkedunescape";
import fetchajaxgettext from "./fetchajaxgettext.js";
import { guid } from "./guid";
import hljs from "./highlight.min.js";
import { ApphomeVm } from "./mark-down-reader.js";
import { 内容调整左边偏移 } from "./render.js";

function getbaseurl() {
    return config.baseurl;
}
const cachemarkdown = new Map();
("use strict");

export default (() => {
    "use strict";
    return (function ($) {
        var loading_interval;
        var loading_id = $("#loading");
        var error_id = $("#error");
        var ditto = {
            run: initialize,
            ...config,
        };
        async function initialize() {
            //Deprecated as of 10.6.0. initHighlightingOnLoad() is deprecated.  Use highlightAll() instead.

            window.addEventListener("hashchange", routerpageget);
            await init_sidebar_section();
            routerpageget();
            hljs.highlightAll();
        }
        async function init_sidebar_section() {
            const baseurl = getbaseurl();
            const summaryfile = new URL(config.summary, baseurl).href;
            console.log(summaryfile);
            var path = summaryfile;
            try {
                const data = await fetchajaxgettext(path);
                ApphomeVm.muluhtml = escapemarkedunescape(data);
                await new Promise((r) => {
                    requestAnimationFrame(() => {
                        $(ApphomeVm.$refs.我的侧边栏).css(
                            "top",
                            $("#my导航栏").height()
                        );
                        $(
                            ApphomeVm.$refs.我的侧边栏.querySelectorAll("ul")
                        ).addClass("navbar-nav");
                        $(
                            ApphomeVm.$refs.我的侧边栏.querySelectorAll("a")
                        ).addClass(`mui-btn mui-btn-primary mui-btn-outlined`);
                        内容调整左边偏移().then(() => r());
                    });
                });
                requestAnimationFrame(() => {
                    $("#my主体").css("padding-top", $("#my导航栏").height());
                    Array.from(ApphomeVm.$refs.我的侧边栏.querySelectorAll("a"))
                        .map((a) => {
                            var ahref = a.getAttribute("href");
                            var b = new URL(location.href);

                            if (
                                !ahref.startsWith("http://") &&
                                !ahref.startsWith("https://") &&
                                ahref.endsWith(".md")
                            ) {
                                b.hash = "#" + a.getAttribute("href");
                                a.href = b.href;
                            }
                            return b;
                        })
                        .map((e) => e.hash)
                        .filter((e_1) => e_1.startsWith("#"))
                        .map((e_2) => e_2.slice(1))
                        .forEach((e_3) => {
                            fetch(
                                new URL(
                                    e_3.endsWith(".md") ? e_3 : e_3 + ".md",
                                    baseurl
                                ).toString(),
                                {
                                    credentials: "omit",
                                    body: null,
                                    method: "GET",
                                    mode: "cors",
                                }
                            );
                        });
                    ApphomeVm.showerror = false;
                });
            } catch (e_4) {
                console.error(e_4);
                stop_loading();

                console.error("Opps! can't find the sidebar file to display!");
                console.warn("load failed " + path);
                ApphomeVm.errorcontent = "加载失败 " + path;
                ApphomeVm.showerror = true;
                throw e_4;
            }
        }
        function show_error(err_msg) {
            error_id.html(err_msg);
            error_id.show();
        }
        function hide_errors() {
            error_id.hide();
        }
        function show_loading() {
            loading_id.show();
            loading_interval = setInterval(function () {
                loading_id.fadeIn(1000).fadeOut(1000);
            }, 2000);
        }
        function stop_loading() {
            clearInterval(loading_interval);
            loading_id.hide();
            $("#loadingparent").hide();
        }

        function routerpageget() {
            const baseurl = getbaseurl();

            window.scrollTo(0, 0);
            var path =
                location.hash === ""
                    ? "./" + ditto.index
                    : location.hash.replace("#", "./");
            show_loading();

            path = path.endsWith(".md") ? path : path + ".md";
            path = new URL(path, baseurl).toString();
            console.log(path);
            if (path !== ApphomeVm.urltext) {
                const marktext = cachemarkdown.get(path);
                console.log(cachemarkdown);
                if (marktext) {
                    ApphomeVm.urltext = path;
                    stop_loading();
                    ApphomeVm.contenthtml = marktext;
                } else {
                    fetchajaxgettext(path)
                        .then(async function (data) {
                            $("#my主体").css(
                                "padding-top",
                                $("#my导航栏").height()
                            );
                            await compile_into_dom(data, path);
                            return await new Promise((r) => {
                                requestAnimationFrame(() => {
                                    Array.from(jQuery("code.hljs")).forEach(
                                        (e) => {
                                            var codecontenguid =
                                                "clip" + guid();
                                            jQuery(e).attr("id", codecontenguid)
                                                .after(`<button class="btn btn-outline-primary clipbutton" data-clipboard-target="#${codecontenguid}">复制
                                        </button>`);
                                        }
                                    );
                                    内容调整左边偏移();
                                    requestAnimationFrame(() => {
                                        stop_loading();
                                    });
                                    ApphomeVm.urltext = path;

                                    var contenthtml = ApphomeVm.contenthtml;
                                    // ApphomeVm.$refs.markdown内容
                                    //     .innerHTML;
                                    cachemarkdown.set(path, contenthtml);
                                    r();
                                });
                            });
                        })
                        .catch(function (e) {
                            console.error(e);
                            ApphomeVm.urltext = "加载失败 " + path;

                            console.error(
                                "Opps! ... File not found!\n5秒后返回主页"
                            );
                            show_error(
                                "Opps! ... File not found!\n5秒后返回主页"
                            );
                            stop_loading();

                            console.warn("load failed " + path);
                            requestAnimationFrame(() => {
                                location.hash = "";
                            });
                            throw e;
                        });
                }
            }
        }

        function compile_into_dom(data, mdurl) {
            console.log(mdurl);
            return new Promise((r) => {
                hide_errors();

                data = escapemarkedunescape(data);

                //修改img的路径为相对md文件的路径
                const tmpdoc =
                    document.implementation.createHTMLDocument("title");
                //参数是必选项 ie
                tmpdoc.body.innerHTML = data;
                //判断img是否是相对路径
                Array.from(tmpdoc.body.querySelectorAll("img")).forEach((e) => {
                    console.log(e);
                    var imgsrc = e.getAttribute("src");
                    console.log(imgsrc, e.src);
                    if (
                        // imgsrc !== e.src &&
                        //firefox浏览器不兼容
                        !imgsrc.startsWith("http://") &&
                        !imgsrc.startsWith("https://")
                    ) {
                        console.log(e, "相对路径图片");
                        var imgrealurl = String(new URL(imgsrc, mdurl));
                        console.log(imgrealurl);
                        e.src = imgrealurl;
                    }
                });
                ApphomeVm.contenthtml = tmpdoc.body.innerHTML;
                requestAnimationFrame(() => {
                    stop_loading();

                    Array.from($("pre code")).forEach(function (block) {
                        hljs.highlightElement(block);
                        /* Deprecated as of 10.7.0. highlightBlock will be removed entirely in v12.0
 Deprecated as of 10.7.0. Please use highlightElement now. */
                    });

                    r();
                });
            });
        }

        return ditto;
    })(jQuery);
})();
