import { cachemarkdown, show_loading, stop_loading } from "./ditto.js";
import { escapemarkedunescape } from "./escapemarkedunescape.js";
import fetchajaxgettext from "./fetchajaxgettext.js";
import { getabsolutesummary } from "./getbaseurl.js";
import { isrelativepath } from "./isrelativepath.js";
import { ApphomeVm } from "./mark-down-reader.js";
import { menulist } from "./menulist.js";
import { precheckfetchajaxmarkdown } from "./precheckfetchajaxmarkdown.js";
import { urlclearhash } from "./urlclearhash.js";
export async function init_sidebar_section() {
    // const baseurl = getbaseurl();
    // const summaryfile = new URL(config.summary, baseurl).href;
    const summaryfile = getabsolutesummary();
    //console.log(summaryfile);
    var path = summaryfile;
    path = urlclearhash(path);
    menulist.push(path);
    try {
        show_loading();
        const data = await fetchajaxgettext(path);
        const markedhtml = await escapemarkedunescape(data);

        const tmpcontainer = document.createElement("div");
        // Reflect.set(ApphomeVm, "muluhtml", markedhtml);
        // @ts-ignore
        // ApphomeVm.muluhtml = await escapemarkedunescape(data);
        tmpcontainer.innerHTML = markedhtml;
        // await /** @type {Promise<void>} */ new Promise<void>((r) => {
        //     requestAnimationFrame(() => {
        Array.from(
            // @ts-ignore
            // Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644.value.
            tmpcontainer.querySelectorAll("ul")
            // as Element[]
        ).forEach((e: Element) => e.classList.add("navbar-nav"));
        Array.from(
            // @ts-ignore
            // Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644.value
            tmpcontainer.querySelectorAll("a")
            //  as Element[]
        ).forEach((e: Element) =>
            e.classList.add(
                ..."mui-btn mui-btn-primary mui-btn-outlined".split(" ")
            )
        );
        //         r();
        //         // 内容调整左边偏移().then(() => r());
        //     });
        // });
        // await /** @type {Promise<void>} */ new Promise<void>((r, j) => {
        //     requestAnimationFrame(() => {
        var links: HTMLAnchorElement[] = Array.from(
            // @ts-ignore
            // Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644.value
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
                //console.log(a.href);
            }
            return b;
        });
        urls.map((e) => e.hash)
            .filter((e_1) => e_1.startsWith("#"))
            .map((e_2) => e_2.slice(1))
            .forEach((e_3) => {
                //console.log(e_3);
                //不管相对路径还是绝对路径都行
                var path = String(
                    new URL(
                        e_3.endsWith(".md") ? e_3 : e_3 + ".md",
                        summaryfile
                    )
                );
                path = urlclearhash(path);

                //
                menulist.push(path);
                //
            });
        Reflect.set(ApphomeVm, "showerror", false);
        // @ts-ignore
        // ApphomeVm.showerror = false;
        //         r();
        //     });
        // });
        console.log(tmpcontainer);
        Reflect.set(ApphomeVm, "muluhtml", tmpcontainer.innerHTML);
        const currentcontenthtml = Reflect.get(ApphomeVm, "muluhtml");
        // @ts-ignore
        // var currentcontenthtml = ApphomeVm.muluhtml;
        if (!cachemarkdown.get(path)) {
            //console.log([path, currentcontenthtml]);
            cachemarkdown.set(path, currentcontenthtml);
        }
        //
        var tmpmenuset = new Set(menulist);
        menulist.length = 0;
        tmpmenuset.forEach((url) => {
            menulist.push(url);
        });
        Object.freeze(menulist);
        console.log("menulist", menulist);
        menulist.forEach((path) => {
            precheckfetchajaxmarkdown(path);
        });

        return;
    } catch (e_4) {
        console.error(e_4);
        stop_loading();

        console.error("Opps! can't find the sidebar file to display!");
        console.warn("load failed " + path);
        Reflect.set(ApphomeVm, "errorcontent", "加载失败 " + path);
        // @ts-ignore
        // ApphomeVm.errorcontent = "加载失败 " + path;
        Reflect.set(ApphomeVm, "showerror", true);
        // @ts-ignore
        // ApphomeVm.showerror = true;
        throw e_4;
    }
}
