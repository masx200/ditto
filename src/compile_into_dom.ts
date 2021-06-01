import { escapemarkedunescape } from "./escapemarkedunescape.js";
import hljs from "./highlight.min.js";
export async function compile_into_dom(
    data: string,
    mdurl: string | URL
    // tmpcontainer: HTMLElement
) {
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
            imgsrc &&
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
    // contenthtml.set(tmpdoc.body.innerHTML);

    // return new Promise<void>((r) => {
    //     requestAnimationFrame(() => {
    // stop_loading();

    Array.from(tmpdoc.body.querySelectorAll("pre code")).forEach(function (
        block
    ) {
        //@ts-ignore
        hljs.highlightElement(block);
        /* Deprecated as of 10.7.0. highlightBlock will be removed entirely in v12.0
 Deprecated as of 10.7.0. Please use highlightElement now. */
    });
    return tmpdoc.body.innerHTML;
    //     r();
    // });
    // });
}
