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
import { getabsolutesummary } from "./getbaseurl.ts";
//@ts-ignore
import { isrelativepath } from "./isrelativepath.ts";
//@ts-ignore
import { ApphomeVm } from "./mark-down-reader.ts";
//@ts-ignore
import { menulist } from "./menulist.ts";
//@ts-ignore
import { precheckfetchajaxmarkdown } from "./precheckfetchajaxmarkdown.ts";
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

        const tmpcontainer = document.createElement("div");

        tmpcontainer.innerHTML = markedhtml;
        //删除当中的style标签和link标签和script标签
        Array.from([
            ...tmpcontainer.querySelectorAll("link"),
            ...tmpcontainer.querySelectorAll("style"),
            ...tmpcontainer.querySelectorAll("script"),
        ]).forEach((e) => {
            e.remove();
        });
        const cataloguelinkhtml = `<a href="${summaryfile}" class="mui-btn mui-btn-primary mui-btn-outlined">目录</a>`;

        tmpcontainer.insertAdjacentHTML("afterbegin", cataloguelinkhtml);
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
                menulist.push(path);
                let mdtitle = a.innerText;

                if (mdtitle && !cachetitle.get(path)) {
                    cachetitle.set(path, mdtitle);
                }
                b.hash = "#" + path;

                a.href = b.href;
            }
        });

        Reflect.set(ApphomeVm, "showerror", false);

        // console.log(tmpcontainer);
        Reflect.set(ApphomeVm, "muluhtml", tmpcontainer.innerHTML);
        const currentcontenthtml = Reflect.get(ApphomeVm, "muluhtml");

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

        throw e_4;
    }
}
