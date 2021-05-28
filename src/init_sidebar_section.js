import $ from "jquery";
import { cachemarkdown, stop_loading } from "./ditto";
import { escapemarkedunescape } from "./escapemarkedunescape";
import fetchajaxgettext from "./fetchajaxgettext.js";
import { getabsolutesummary } from "./getbaseurl";
import { isrelativepath } from "./isrelativepath";
import { ApphomeVm } from "./mark-down-reader.js";
import { menulist } from "./menulist.js";
import { precheckfetchajaxmarkdown } from "./precheckfetchajaxmarkdown";
import { 内容调整左边偏移 } from "./render.js";
import { urlclearhash } from "./urlclearhash";
export async function init_sidebar_section() {
    // const baseurl = getbaseurl();
    // const summaryfile = new URL(config.summary, baseurl).href;
    const summaryfile = getabsolutesummary();
    //console.log(summaryfile);
    var path = summaryfile;
    path = urlclearhash(path);
    menulist.push(path);
    try {
        const data = await fetchajaxgettext(path);
        ApphomeVm.muluhtml = await escapemarkedunescape(data);
        await new Promise((r) => {
            requestAnimationFrame(() => {
                $(
                    ApphomeVm.$refs
                        .Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644
                ).css(
                    "top",
                    $(
                        "#mynavigationbar-dceff036a563faf668b4d4a50fd702d1d95"
                    ).height()
                );
                $(
                    ApphomeVm.$refs.Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644.querySelectorAll(
                        "ul"
                    )
                ).addClass("navbar-nav");
                $(
                    ApphomeVm.$refs.Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644.querySelectorAll(
                        "a"
                    )
                ).addClass(`mui-btn mui-btn-primary mui-btn-outlined`);
                内容调整左边偏移().then(() => r());
            });
        });
        await new Promise((r, j) => {
            requestAnimationFrame(() => {
                $("#mybody-143af32b9b8f396b798aeb8d4ee68ed9ca3").css(
                    "padding-top",
                    $(
                        "#mynavigationbar-dceff036a563faf668b4d4a50fd702d1d95"
                    ).height()
                );
                var links = Array.from(
                    ApphomeVm.$refs.Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644.querySelectorAll(
                        "a"
                    )
                );
                var urls = links.map((a) => {
                    var ahref = a.getAttribute("href");
                    var b = new URL(location.href);

                    if (ahref.endsWith(".md")) {
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
                        var path = new URL(
                            e_3.endsWith(".md") ? e_3 : e_3 + ".md",
                            summaryfile
                        ).toString();
                        path = urlclearhash(path);

                        //
                        menulist.push(path);
                        //
                        precheckfetchajaxmarkdown(path)
                            .then((res) => {
                                //console.log(res);
                                r();
                            })
                            .catch((e) => {
                                console.error(e);
                                j(e);
                            });
                    });
                ApphomeVm.showerror = false;
            });
        });
        var currentcontenthtml = ApphomeVm.muluhtml;
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
        //console.log("menulist", menulist);
        return;
    } catch (e_4) {
        console.error(e_4);
        stop_loading();

        console.error("Opps! can't find the sidebar file to display!");
        console.warn("load failed " + path);
        ApphomeVm.errorcontent = "加载失败 " + path;
        ApphomeVm.showerror = true;
        throw e_4;
    }
}
