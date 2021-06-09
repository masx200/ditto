//@ts-ignore
import { cachemarkdown, show_loading, stop_loading } from "./ditto.ts";
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

    var path = summaryfile;
    path = urlclearhash(path);
    menulist.push(path);
    try {
        show_loading();
        const data = await fetchajaxgettext(path);
        const markedhtml = await escapemarkedunescape(data);

        const tmpcontainer = document.createElement("div");

        tmpcontainer.innerHTML = markedhtml;

        Array.from(tmpcontainer.querySelectorAll("ul")).forEach((e: Element) =>
            e.classList.add("navbar-nav")
        );
        Array.from(tmpcontainer.querySelectorAll("a")).forEach((e: Element) =>
            e.classList.add(
                ..."mui-btn mui-btn-primary mui-btn-outlined".split(" ")
            )
        );

        var links: HTMLAnchorElement[] = Array.from(
            tmpcontainer.querySelectorAll("a")
        );
        var urls = links.map((a) => {
            var ahref = a.getAttribute("href");
            var b = new URL(location.href);

            if (ahref?.endsWith(".md")) {
                var realmdpath = isrelativepath(ahref)
                    ? new URL(ahref, summaryfile)
                    : ahref;
                b.hash = "#" + realmdpath;

                a.href = b.href;
            }
            return b;
        });
        urls.map((e) => e.hash)
            .filter((e_1) => e_1.startsWith("#"))
            .map((e_2) => e_2.slice(1))
            .forEach((e_3) => {
                var path = String(
                    new URL(
                        e_3.endsWith(".md") ? e_3 : e_3 + ".md",
                        summaryfile
                    )
                );
                path = urlclearhash(path);

                menulist.push(path);
            });
        Reflect.set(ApphomeVm, "showerror", false);

        console.log(tmpcontainer);
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
        console.log("menulist", menulist);
        menulist.forEach((path: string) => {
            precheckfetchajaxmarkdown(path);
        });

        return;
    } catch (e_4) {
        console.error(e_4);
        stop_loading();

        console.error("Opps! can't find the sidebar file to display!");
        console.warn("load failed " + path);
        Reflect.set(ApphomeVm, "errorcontent", "加载失败 " + path);

        Reflect.set(ApphomeVm, "showerror", true);

        throw e_4;
    }
}
