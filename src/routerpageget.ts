//@ts-ignore
//@ts-ignore
//@ts-ignore
//@ts-ignore
// import anchorimg from "./anchor.svg";
//@ts-ignore
import { getappvm } from "./appvm.ts"; //@ts-ignore
import { compile_into_dom } from "./compile_into_dom.ts";
//@ts-ignore
import { contenthtml } from "./contenthtml.ts";
//@ts-ignore
import { debounce } from "./debounce.ts";
//@ts-ignore
import {
    cachemarkdown,
    cachetitle,
    show_loading,
    stop_loading,
    //@ts-ignore
} from "./ditto.ts"; //@ts-ignore
//@ts-ignore
import { eventtarget } from "./eventtarget.ts"; //@ts-ignore
import fetchajaxgettext from "./fetchajaxgettext.ts";
//@ts-ignore
import { guid } from "./guid.ts"; //@ts-ignore
import { router } from "./hashrouter.ts";
//@ts-ignore
import { removesomevalidelements } from "./removesomevalidelements.ts";
//@ts-ignore
//@ts-ignore
import { resolvemdpathfromhash } from "./resolvemdpathfromhash.ts"; //@ts-ignore
import { urlclearhash } from "./urlclearhash.ts";
//@ts-ignore
export const routerpagegethandler = debounce(async () => {
    return loadpage().then(() => {
        eventtarget.dispatchEvent(new Event("load"));
    });
});
async function loadpage() {
    const appvm = getappvm();
    // console.log(cachemarkdown);
    window.scrollTo(0, 0);
    show_loading();
    const path: string = resolvemdpathfromhash();
    if (path !== Reflect.get(appvm, "urltext")) {
        const marktext = cachemarkdown.get(path);

        if (marktext) {
            contenthtml.set(marktext);
            Reflect.set(appvm, "urltext", path);
            stop_loading();
            Reflect.set(appvm, "showsrc", true);

            return;
        } else {
            show_loading();
            try {
                const data = await fetchajaxgettext(path);

                const tmpcontainer = document.createElement("div");

                tmpcontainer.innerHTML = await compile_into_dom(data, path);
                //删除当中的style标签和link标签和script标签

                removesomevalidelements(tmpcontainer);

                handlecodecopy(tmpcontainer);

                changelinkmd(tmpcontainer, path);

                headeraddanchor(tmpcontainer);
                //console.log(tmpcontainer);
                const currentmdhtml = tmpcontainer.innerHTML;
                console.log(currentmdhtml);
                if (!cachemarkdown.get(path)) {
                    cachemarkdown.set(path, currentmdhtml);
                }

                window.scrollTo(0, 0);
                stop_loading();
                Reflect.set(appvm, "showsrc", true);
                if (path == resolvemdpathfromhash()) {
                    contenthtml.set(currentmdhtml);
                    Reflect.set(appvm, "urltext", path);
                }
                resolvetitlesave(tmpcontainer, path);

                Reflect.set(appvm, "showerror", false);
                return;
            } catch (e_1) {
                console.error(e_1);
                Reflect.set(appvm, "errorcontent", "加载失败 " + path);

                // console.error("Opps! ... File not found!\n5秒后返回主页");

                stop_loading();
                Reflect.set(appvm, "showerror", true);
                console.warn("load failed " + path);
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        location.hash = "";
                    }, 5000);
                });
                Reflect.set(appvm, "showsrc", false);
                throw e_1;
            }
        }
    } else {
        stop_loading();
        return;
    }
}
function headeraddanchor(tmpcontainer: HTMLElement) {
    const headerselectors = ["h1", "h2", "h3", "h4", "h5", "h6"];

    const headereles = headerselectors
        .map((t) => Array.from(tmpcontainer.querySelectorAll(t)))
        .flat();
    headereles.forEach((e) => {
        console.log(e);
        const id = e.id;
        const href = router.paramshref((o: any) => {
            console.log(o,{ ...o, id })

            return { ...o, id };
        });
        e.insertAdjacentHTML(
            "afterbegin",
            `<a class='anchor' href=${href}><span class='anchor-icon'></a>`
        );
    });
}

function changelinkmd(tmpcontainer: HTMLElement, path: string) {
    const links: HTMLAnchorElement[] = Array.from(
        tmpcontainer.querySelectorAll("a")
    );
    links.forEach((a) => {
        var ahref = a.getAttribute("href");
        var b = new URL(location.href);
        if (ahref?.endsWith(".md")) {
            var realmdpath = String(new URL(ahref, path));
            let tmppath = urlclearhash(realmdpath);
            if (!new URL(tmppath).pathname.endsWith(".md")) {
                return;
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
}

function resolvetitlesave(tmpcontainer: HTMLElement, path: string) {
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
}

function handlecodecopy(tmpcontainer: HTMLElement) {
    Array.from(tmpcontainer.querySelectorAll("pre")).forEach((e) => {
        e.classList.add("position-relative");
    });
    Array.from(tmpcontainer.querySelectorAll("code.hljs")).forEach((e) => {
        const codecontenguid = "clip-" + guid();

        e.setAttribute("id", codecontenguid);

        e.insertAdjacentHTML(
            "afterend",
            `<button class="btn btn-outline-primary clipbutton position-absolute right-0 top-0" data-clipboard-target="#${codecontenguid}">复制
                                        </button>`
        );
    });
}
