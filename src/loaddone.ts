//@ts-ignore
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
// import hljs from "./highlight.min.ts";
//@ts-ignore
import { initloadingid } from "./mark-down-reader.ts";
//@ts-ignore
import { setnextpagelink, setprevpagelink } from "./toprevpage.ts";
//@ts-ignore
import { 窄屏隐藏侧边栏 } from "./窄屏隐藏侧边栏.ts"; //@ts-ignore
async function loaddone() {
    const appvm = getappvm();
    let initloadele = document.getElementById(initloadingid);
    initloadele && (initloadele.style.display = "none");

    window.scrollTo(0, 0);
    stop_loading();
    Reflect.set(appvm, "showsrc", true);
    let path = Reflect.get(appvm, "urltext");
    let mdtitle = cachetitle.get(path);

    document.title = mdtitle
        ? mdtitle + " - " + config.maintitle
        : config.maintitle;
    await new Promise<void>((res) => {
        requestAnimationFrame(async () => {
            Array.from(document.querySelectorAll("a")).forEach((e) => {
                if (e.hash === "#" + path) {
                    e.classList.add("active");
                } else {
                    e.classList.remove("active");
                }
            }); //@ts-ignore
            const hljs = (await import("./highlight.min.ts")).default;
            hljs.highlightAll();
            stop_loading();
            res();
        });
    });

    Reflect.set(appvm, "showerror", false);
    窄屏隐藏侧边栏();
    setnextpagelink();
    setprevpagelink();
}
eventtarget.addEventListener("load", loaddone);
eventtarget.addEventListener("load", () => {
    Adjustthedistance();
}); //@ts-ignore
