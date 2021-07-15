//@ts-ignore
import Vue from "vue";
//@ts-ignore
import { getnavbarheight } from "./Adjustthedistance.ts";
//@ts-ignore
import { Adjustthedistance } from "./Adjustthedistance.ts";
//@ts-ignore
import { getappvm } from "./appvm.ts"; //@ts-ignore
import config from "./config.ts";
//@ts-ignore
import { cachetitle, stop_loading } from "./ditto.ts";
//@ts-ignore
import { eventtarget } from "./eventtarget.ts";
//@ts-ignore
import { router } from "./hashrouter.ts";
//@ts-ignore
// import hljs from "./highlight.min.ts";
//@ts-ignore
import { initloadingid } from "./mark-down-reader.ts";
//@ts-ignore
import { setnextpagelink, setprevpagelink } from "./toprevpage.ts";
//@ts-ignore
import { 窄屏隐藏侧边栏 } from "./窄屏隐藏侧边栏.ts"; //@ts-ignore
eventtarget.addEventListener("mount", () => {
    窄屏隐藏侧边栏();
});
async function loaddone() {
    await Vue.nextTick();
    const appvm = getappvm();
    let initloadele = document.getElementById(initloadingid);
    initloadele && (initloadele.style.display = "none");

    stop_loading();
    Reflect.set(appvm, "showsrc", true);
    let path = Reflect.get(appvm, "urltext");
    let mdtitle = cachetitle.get(path);

    document.title = mdtitle
        ? mdtitle + " - " + config.maintitle
        : config.maintitle;
    await new Promise<void>((res) => {
        requestAnimationFrame(async () => {
            //@ts-ignore
            const hljs = (await import("./highlight.min.ts")).default;
            hljs.highlightAll();
            stop_loading();
            res();
        });
    });

    Reflect.set(appvm, "showerror", false);

    await Vue.nextTick();
    setnextpagelink();
    setprevpagelink();
    await Vue.nextTick();
    Array.from(document.querySelectorAll("a")).forEach((e) => {
        if (e.hash === "#" + path) {
            e.classList.add("active");
        } else {
            e.classList.remove("active");
        }
    });
}
eventtarget.addEventListener("load", loaddone);
eventtarget.addEventListener("load", () => {
    Adjustthedistance();
}); //@ts-ignore
eventtarget.addEventListener("load", () => {
    const params = router.getparams();

    if (Reflect.has(params, "id")) {
        const id = Reflect.get(params, "id");
        const ele = document.getElementById(id);

        ele &&
            requestAnimationFrame(async () => {
                await Vue.nextTick();
                // console.log(ele.offsetTop);
                requestAnimationFrame(() => {
                    const scrollheight = ele.offsetTop - getnavbarheight();
                    console.log(ele.offsetTop, getnavbarheight(), scrollheight);
                    window.scrollTo(0, scrollheight);
                });
            });
    } else {
        window.scrollTo(0, 0);
    }
}); //@ts-ignore
