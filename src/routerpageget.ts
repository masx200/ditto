import $ from "jquery";
import { compile_into_dom } from "./compile_into_dom.js";
import { contenthtml } from "./contenthtml.js";
import fetchajaxgettext from "./fetchajaxgettext.js";
import { getabsoluteindex, getbaseurl } from "./getbaseurl.js";
import { guid } from "./guid.js";
import { isrelativepath } from "./isrelativepath.js";
import { ApphomeVm, initloadingid } from "./mark-down-reader.js";
import { 内容调整左边偏移 } from "./render.js";
import { urlclearhash } from "./urlclearhash.js";
import {
    show_loading,
    cachemarkdown,
    stop_loading,
    // $,
    // show_error,
} from "./ditto.js";

export async function routerpageget() {
    const baseurl = getbaseurl();

    window.scrollTo(0, 0);
    //ie浏览器中可能为"#"
    var path =
        location.hash === "" || location.hash === "#"
            ? getabsoluteindex()
            : location.hash.replace("#", "");
    show_loading();

    path = path.endsWith(".md") ? path : path + ".md";
    if (isrelativepath(path)) {
        path = new URL(path, baseurl).toString();
    }

    path = urlclearhash(path);

    //console.log(path);
    // @ts-ignore
    if (path !== ApphomeVm.urltext) {
        const marktext = cachemarkdown.get(path);
        //console.log(cachemarkdown);
        if (marktext) {
            // @ts-ignore
            ApphomeVm.urltext = path;
            stop_loading();
            contenthtml.set(marktext);
            return;
        } else {
            try {
                const data = await fetchajaxgettext(path);
                // @ts-ignore
                ApphomeVm.urltext = path;
                $("#mybody-143af32b9b8f396b798aeb8d4ee68ed9ca3").css(
                    "padding-top",
                    Number(
                        $(
                            "#mynavigationbar-dceff036a563faf668b4d4a50fd702d1d95"
                        ).height()
                    )
                );
                await compile_into_dom(data, path);
                await new Promise<void>((r) => {
                    requestAnimationFrame(async () => {
                        Array.from($("code.hljs")).forEach((e) => {
                            var codecontenguid = "clip" + guid();
                            $(e).attr("id", codecontenguid)
                                .after(`<button class="btn btn-outline-primary clipbutton" data-clipboard-target="#${codecontenguid}">复制
                                        </button>`);
                        });
                        await 内容调整左边偏移();
                        requestAnimationFrame(() => {
                            stop_loading();
                        });

                        //处理md文件相互引用的问题
                        // @ts-ignore
                        var links: HTMLAnchorElement[] = Array.from(
                            // @ts-ignore
                            ApphomeVm.$refs.markdowncontent_2e4c728cac441a0c48939881c2c714361a0.querySelectorAll(
                                "a"
                            )
                        );
                        links.forEach((a) => {
                            var ahref = a.getAttribute("href");
                            var b = new URL(location.href);
                            if (ahref?.endsWith(".md")) {
                                var realmdpath =
                                    // isrelativepath(ahref)
                                    // ?
                                    new URL(
                                        ahref,
                                        // @ts-ignore
                                        ApphomeVm.urltext
                                    );
                                // : ahref;
                                b.hash = "#" + realmdpath;

                                a.href = b.href;
                                //console.log(a.href);
                                //变成按钮的形状
                                $(a).addClass(
                                    `mui-btn mui-btn-primary mui-btn-outlined`
                                );
                            }
                        });
                        // @ts-ignore
                        ApphomeVm.urltext = path;

                        var currentcontenthtml = contenthtml.get();
                        //切换页面太快导致问题缓存出错,原因在于vue把他缓存了
                        if (!cachemarkdown.get(path)) {
                            //console.log([path, currentcontenthtml]);
                            cachemarkdown.set(path, currentcontenthtml);
                        }
                        let initloadele =
                            document.getElementById(initloadingid);
                        initloadele && (initloadele.style.display = "none");
                        r();
                    });
                });
                window.scrollTo(0, 0);
                return;
            } catch (e_1) {
                console.error(e_1);
                // @ts-ignore
                ApphomeVm.urltext = "加载失败 " + path;

                console.error("Opps! ... File not found!\n5秒后返回主页");
                // show_error("Opps! ... File not found!\n5秒后返回主页");
                stop_loading();

                console.warn("load failed " + path);
                requestAnimationFrame(() => {
                    location.hash = "";
                });
                throw e_1;
            }
        }
    }
}