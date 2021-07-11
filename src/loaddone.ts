import {
    stop_loading,
    cachetitle,
    //@ts-ignore
} from "./ditto.ts";
//@ts-ignore
import { ApphomeVm, initloadingid } from "./mark-down-reader.ts";
//@ts-ignore
import { setnextpagelink, setprevpagelink } from "./toprevpage.ts";
//@ts-ignore
import config from "./config.ts";
//@ts-ignore
import hljs from "./highlight.min.ts";
//@ts-ignore
import { 窄屏隐藏侧边栏 } from "./窄屏隐藏侧边栏.ts";
export function loaddone() {
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
    requestAnimationFrame(() => {
        Array.from(document.querySelectorAll("a")).forEach((e) => {
            if (e.hash === "#" + path) {
                e.classList.add("active");
            } else {
                e.classList.remove("active");
            }
        });
        hljs.highlightAll();
        stop_loading();
    });
    Reflect.set(ApphomeVm, "showerror", false);
窄屏隐藏侧边栏()
}
