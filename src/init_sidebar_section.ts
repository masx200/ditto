//@ts-ignore
import {
    cachemarkdown,
    cachetitle,
    show_loading,
    stop_loading,
    //@ts-ignore
} from "./ditto.ts";
//@ts-ignore
import { escapemarkedunescape } from "./escapemarkedunescape.ts";
//@ts-ignore
import fetchajaxgettext from "./fetchajaxgettext.ts";
//@ts-ignore
import { getabsolutesummary, getabsoluteindex } from "./getbaseurl.ts";
//@ts-ignore
import hljs from "./highlight.min.ts";
//@ts-ignore
import { isrelativepath } from "./isrelativepath.ts";
//@ts-ignore
import { ApphomeVm } from "./mark-down-reader.ts";
//@ts-ignore
import { menulist } from "./menulist.ts";
//@ts-ignore
import { precheckfetchajaxmarkdown } from "./precheckfetchajaxmarkdown.ts";
//@ts-ignore
import { removesomevalidelements } from "./removesomevalidelements.ts";
//@ts-ignore
import { urlclearhash } from "./urlclearhash.ts";
export async function init_sidebar_section() {
    const summaryfile = getabsolutesummary();
    // alert(summaryfile);
    var path = summaryfile;
    path = urlclearhash(path);
    menulist.unshift(path);
    try {
        show_loading();
        const data = await fetchajaxgettext(path);
        const markedhtml = await escapemarkedunescape(data);
        const tmpdoc = document.implementation.createHTMLDocument("title");

        tmpdoc.body.innerHTML = markedhtml;

        Array.from(tmpdoc.body.querySelectorAll("img")).forEach((e) => {
            var imgsrc = e.getAttribute("src");

            if (
                imgsrc &&
                !imgsrc.startsWith("http://") &&
                !imgsrc.startsWith("https://")
            ) {
                var imgrealurl = String(new URL(imgsrc, summaryfile));

                e.src = imgrealurl;
            }
        });
        const tmpcontainer = document.createElement("div");

        tmpcontainer.innerHTML = tmpdoc.body.innerHTML;
        //删除当中的style标签和link标签和script标签
        removesomevalidelements(tmpcontainer);

        Array.from(tmpcontainer.querySelectorAll("pre code")).forEach(function (
            block: Element
        ) {
            hljs.highlightElement(block);
        });
        const homefile = getabsoluteindex();
        menulist.unshift(homefile);
        const linkanddescriptions = [
            { u: summaryfile, d: "目录" },
            { u: homefile, d: "主页" },
        ];
        linkanddescriptions.forEach(({ u, d }) => {
            const cataloguelinkhtml = `<a href="${u}" class="mui-btn mui-btn-primary mui-btn-outlined">${d}</a><br/>`;

            tmpcontainer.insertAdjacentHTML("afterbegin", cataloguelinkhtml);
        });

        Array.from(tmpcontainer.querySelectorAll("ul")).forEach((e: Element) =>
            e.classList.add("navbar-nav")
        );
        Array.from(tmpcontainer.querySelectorAll("a")).forEach((e: Element) =>
            e.classList.add(
                ..."mui-btn mui-btn-primary mui-btn-outlined mybutton-8731e6c5bb5148e49e14cca7cdfa73e8".split(
                    " "
                )
            )
        );

        var links: HTMLAnchorElement[] = Array.from(
            tmpcontainer.querySelectorAll("a")
        );
        links.forEach((a) => {
            var ahref = a.getAttribute("href");
            var b = new URL(location.href);

            if (ahref?.endsWith(".md")) {
                var realmdpath = isrelativepath(ahref)
                    ? new URL(ahref, summaryfile)
                    : ahref;

                let path = urlclearhash(realmdpath);

                path = path.endsWith(".md") ? path : path + ".md";

                let tmppath = path;
                if (!new URL(tmppath).pathname.endsWith(".md")) {
                    return;
                }
                menulist.push(tmppath);
                let mdtitle = a.innerText;

                if (mdtitle && !cachetitle.get(tmppath)) {
                    cachetitle.set(tmppath, mdtitle);
                }

                b.hash = "#" + tmppath;

                a.href = b.href;
                // a.dataset.href = tmppath;
                a.classList.add(
                    ..."mui-btn mui-btn-primary mui-btn-outlined mybutton-8731e6c5bb5148e49e14cca7cdfa73e8".split(
                        " "
                    )
                );
            }
        });

        //删除重复的链接

        new Set(
            Array.from(tmpcontainer.querySelectorAll("a")).map((a) => a.href)
        ).forEach((href) => {
            tmpcontainer
                .querySelectorAll(`a[href="${href}"]`)
                .forEach((e, i) => {
                    if (i > 0) {
                        let parent = e.parentNode;

                        e.remove();
                        if (parent && !parent.childNodes.length) {
                            let remove = Reflect.get(parent, "remove");

                            if ("function" === typeof remove) {
                                Reflect.apply(remove, parent, []);
                            }
                        }
                    }
                });
        });
        Reflect.set(ApphomeVm, "showerror", false);

        // console.log(tmpcontainer);
        Reflect.set(ApphomeVm, "muluhtml", tmpcontainer.innerHTML);
        // const currentcontenthtml = Reflect.get(ApphomeVm, "muluhtml");
        const currentcontenthtml = tmpcontainer.innerHTML;
        if (!cachemarkdown.get(path)) {
            cachemarkdown.set(path, currentcontenthtml);
        }

        var tmpmenuset = new Set(menulist);
        menulist.length = 0;
        tmpmenuset.forEach((url) => {
            menulist.push(url);
        });
        Object.freeze(menulist);
        // console.log("menulist", menulist);
        menulist.forEach((path: string) => {
            precheckfetchajaxmarkdown(path);
        });

        return;
    } catch (e_4) {
        console.error(e_4);
        stop_loading();

        // console.error("Opps! can't find the sidebar file to display!");
        // console.warn("load failed " + path);
        Reflect.set(ApphomeVm, "errorcontent", "加载失败 " + path);

        Reflect.set(ApphomeVm, "showerror", true);
        Reflect.set(ApphomeVm, "showsrc", false);
        throw e_4;
    }
}
