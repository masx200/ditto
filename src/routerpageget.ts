//@ts-ignore
import { compile_into_dom } from "./compile_into_dom.ts"; //@ts-ignore
import { contenthtml } from "./contenthtml.ts"; //@ts-ignore
import { debounce } from "./debounce.ts"; //@ts-ignore
import {
    cachemarkdown,
    show_loading,
    stop_loading,
    cachetitle,
    //@ts-ignore
} from "./ditto.ts"; //@ts-ignore
import fetchajaxgettext from "./fetchajaxgettext.ts"; //@ts-ignore
import { getabsoluteindex, getbaseurl } from "./getbaseurl.ts"; //@ts-ignore
import { guid } from "./guid.ts"; //@ts-ignore
import { isrelativepath } from "./isrelativepath.ts"; //@ts-ignore
import { ApphomeVm, initloadingid } from "./mark-down-reader.ts"; //@ts-ignore
import { urlclearhash } from "./urlclearhash.ts"; //@ts-ignore

import { setnextpagelink, setprevpagelink } from "./toprevpage.ts";
//@ts-ignore
import config from "./config.ts";
function resolvemdpathfromhash() {
    const baseurl = getbaseurl();

    var path =
        location.hash === "" || location.hash === "#"
            ? getabsoluteindex()
            : location.hash.replace("#", "");

    path = path.endsWith(".md") ? path : path + ".md";
    if (isrelativepath(path)) {
        path = new URL(path, baseurl).toString();
    }

    path = urlclearhash(path);
    return path;
}
export const routerpagegethandler = debounce(async function () {
    window.scrollTo(0, 0);
    show_loading();
    const path = resolvemdpathfromhash();
    if (path !== Reflect.get(ApphomeVm, "urltext")) {
        const marktext = cachemarkdown.get(path);

        if (marktext) {
            contenthtml.set(marktext);
            Reflect.set(ApphomeVm, "urltext", path);
            stop_loading();
            Reflect.set(ApphomeVm, "showsrc", true);
            loaddone();
            return;
        } else {
            show_loading();
            try {
                const data = await fetchajaxgettext(path);

                const tmpcontainer = document.createElement("div");

                tmpcontainer.innerHTML = await compile_into_dom(data, path);

                Array.from(tmpcontainer.querySelectorAll("code.hljs")).forEach(
                    (e) => {
                        const codecontenguid = "clip" + guid();

                        e.setAttribute("id", codecontenguid);

                        e.insertAdjacentHTML(
                            "afterend",
                            `<button class="btn btn-outline-primary clipbutton" data-clipboard-target="#${codecontenguid}">复制
                                        </button>`
                        );
                    }
                );

                const links: HTMLAnchorElement[] = Array.from(
                    tmpcontainer.querySelectorAll("a")
                );
                links.forEach((a) => {
                    var ahref = a.getAttribute("href");
                    var b = new URL(location.href);
                    if (ahref?.endsWith(".md")) {
                        var realmdpath = new URL(ahref, path);

                        b.hash = "#" + realmdpath;

                        a.href = b.href;

                        a.classList.add(
                            ..."mui-btn mui-btn-primary mui-btn-outlined mybutton-8731e6c5bb5148e49e14cca7cdfa73e8".split(
                                " "
                            )
                        );
                    }
                });

                //console.log(tmpcontainer);

                if (!cachemarkdown.get(path)) {
                    cachemarkdown.set(path, tmpcontainer.innerHTML);
                }
                let initloadele = document.getElementById(initloadingid);
                initloadele && (initloadele.style.display = "none");

                window.scrollTo(0, 0);
                stop_loading();
                Reflect.set(ApphomeVm, "showsrc", true);
                if (path == resolvemdpathfromhash()) {
                    contenthtml.set(tmpcontainer.innerHTML);
                    Reflect.set(ApphomeVm, "urltext", path);
                }
                let mdtitle = (() => {
                    let selectors = ["h1", "h2", "h3", "h4", "h5", "h6"];
                    for (let sel of selectors) {
                        //@ts-ignore
                        let title = tmpcontainer.querySelector(sel)?.innerText;
                        if (title) {
                            return title;
                        }
                    }
                })();

                if (mdtitle && !cachetitle.get(path)) {
                    cachetitle.set(path, mdtitle);
                }
                loaddone();
                return;
            } catch (e_1) {
                console.error(e_1);
                Reflect.set(ApphomeVm, "urltext", "加载失败 " + path);

                console.error("Opps! ... File not found!\n5秒后返回主页");

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
function loaddone() {
    let initloadele = document.getElementById(initloadingid);
    initloadele && (initloadele.style.display = "none");

    window.scrollTo(0, 0);
    stop_loading();
    Reflect.set(ApphomeVm, "showsrc", true);
    let path = Reflect.get(ApphomeVm, "urltext");
    let mdtitle = cachetitle.get(path);

    setnextpagelink();
    setprevpagelink();
    document.title = mdtitle
        ? mdtitle + " - " + config.maintitle
        : config.maintitle;
}
