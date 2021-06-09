//@ts-ignore
import { escapemarkedunescape } from "./escapemarkedunescape.ts";
//@ts-ignore
import hljs from "./highlight.min.ts";
export async function compile_into_dom(data: string, mdurl: string | URL) {
    data = await escapemarkedunescape(data);

    const tmpdoc = document.implementation.createHTMLDocument("title");

    tmpdoc.body.innerHTML = data;

    Array.from(tmpdoc.body.querySelectorAll("img")).forEach((e) => {
        var imgsrc = e.getAttribute("src");

        if (
            imgsrc &&
            !imgsrc.startsWith("http://") &&
            !imgsrc.startsWith("https://")
        ) {
            var imgrealurl = String(new URL(imgsrc, mdurl));

            e.src = imgrealurl;
        }
    });

    Array.from(tmpdoc.body.querySelectorAll("pre code")).forEach(function (
        block: Element
    ) {
        hljs.highlightElement(block);
    });
    return tmpdoc.body.innerHTML;
}
