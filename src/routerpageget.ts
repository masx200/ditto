import { compile_into_dom } from "./compile_into_dom.js";
import { contenthtml } from "./contenthtml.js";
import { debounce } from "./debounce.js";
import { cachemarkdown, show_loading, stop_loading } from "./ditto.js";
import fetchajaxgettext from "./fetchajaxgettext.js";
import { getabsoluteindex, getbaseurl } from "./getbaseurl.js";
import { guid } from "./guid.js";
import { isrelativepath } from "./isrelativepath.js";
import { ApphomeVm, initloadingid } from "./mark-down-reader.js";
import { markdowncontent_2e4c728cac441a0c48939881c2c714361a0 } from "./refele.js";
import { urlclearhash } from "./urlclearhash.js";

export const routerpagegethandler = debounce(async function () {
    const baseurl = getbaseurl();

    window.scrollTo(0, 0);
    //ie浏览器中可能为"#"
    var path =
        location.hash === "" || location.hash === "#"
            ? getabsoluteindex()
            : location.hash.replace("#", "");

    path = path.endsWith(".md") ? path : path + ".md";
    if (isrelativepath(path)) {
        path = new URL(path, baseurl).toString();
    }

    path = urlclearhash(path);

    //console.log(path);
    // @ts-ignore
    //
    if (path !== Reflect.get(ApphomeVm, "urltext")) {
        // if (path !== ApphomeVm.urltext) {
        const marktext = cachemarkdown.get(path);
        //console.log(cachemarkdown);
        if (marktext) {
            Reflect.set(ApphomeVm, "urltext", path);
            // @ts-ignore
            // ApphomeVm.urltext = path;

            contenthtml.set(marktext);
            stop_loading();
            return;
        } else {
            show_loading();
            try {
                const data = await fetchajaxgettext(path);
                Reflect.set(ApphomeVm, "urltext", path);

                await compile_into_dom(data, path);
                await new Promise<void>((r) => {
                    requestAnimationFrame(async () => {
                        Array.from(
                            document.querySelectorAll("code.hljs")
                        ).forEach((e) => {
                            var codecontenguid = "clip" + guid();
                            var codecontenguid = "clip" + guid();
                            e.setAttribute("id", codecontenguid);

                            e.insertAdjacentHTML(
                                "afterend",
                                `<button class="btn btn-outline-primary clipbutton" data-clipboard-target="#${codecontenguid}">复制
                                        </button>`
                            );
                        });
                        // await 内容调整左边偏移();
                        // requestAnimationFrame(() => {

                        // });

                        //处理md文件相互引用的问题
                        // @ts-ignore
                        var links: HTMLAnchorElement[] = Array.from(
                            // @ts-ignore
                            markdowncontent_2e4c728cac441a0c48939881c2c714361a0.value.querySelectorAll(
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
                                        Reflect.get(ApphomeVm, "urltext")
                                        // @ts-ignore
                                        // ApphomeVm.urltext
                                    );
                                // : ahref;
                                b.hash = "#" + realmdpath;

                                a.href = b.href;
                                //console.log(a.href);
                                //变成按钮的形状
                                a.classList.add(
                                    ..."mui-btn mui-btn-primary mui-btn-outlined".split(
                                        " "
                                    )
                                );
                            }
                        });
                        // @ts-ignore
                        // ApphomeVm.urltext = path;
                        Reflect.set(ApphomeVm, "urltext", path);
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
                stop_loading();
                Reflect.set(ApphomeVm, "showsrc", true);
                return;
            } catch (e_1) {
                console.error(e_1);
                Reflect.set(ApphomeVm, "urltext", "加载失败 " + path);
                // @ts-ignore
                // ApphomeVm.urltext = "加载失败 " + path;

                console.error("Opps! ... File not found!\n5秒后返回主页");
                // show_error("Opps! ... File not found!\n5秒后返回主页");
                stop_loading();

                console.warn("load failed " + path);
                requestAnimationFrame(() => {
                    location.hash = "";
                });
                Reflect.set(ApphomeVm, "showsrc", true);
                throw e_1;
            }
        }
    }
});
