import { contenthtml } from "./contenthtml.js";
import { escapemarkedunescape } from "./escapemarkedunescape";
import hljs from "./highlight.min.js";
import { hide_errors, stop_loading } from "./ditto";
import $ from "jquery";
export async function compile_into_dom(data, mdurl) {
    //console.log(mdurl);

    hide_errors();

    data = await escapemarkedunescape(data);

    //修改img的路径为相对md文件的路径
    const tmpdoc = document.implementation.createHTMLDocument("title");
    //参数是必选项 ie
    tmpdoc.body.innerHTML = data;
    //判断img是否是相对路径
    Array.from(tmpdoc.body.querySelectorAll("img")).forEach((e) => {
        // //console.log(e);
        var imgsrc = e.getAttribute("src");
        //console.log(imgsrc, e.src);
        if (
            // imgsrc !== e.src &&
            //firefox浏览器不兼容
            !imgsrc.startsWith("http://") &&
            !imgsrc.startsWith("https://")
        ) {
            //console.log("相对路径图片", e);
            var imgrealurl = String(new URL(imgsrc, mdurl));
            //console.log(imgrealurl);
            e.src = imgrealurl;
        }
    });
    contenthtml.set(tmpdoc.body.innerHTML);

    return new Promise((r) => {
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
