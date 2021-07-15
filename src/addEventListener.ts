//@ts-ignore
import { Adjustthedistance } from "./Adjustthedistance.ts";
//@ts-ignore
import { eventtarget } from "./eventtarget.ts";
//@ts-ignore
import { anchorscroll } from "./anchorscroll.ts";
//@ts-ignore
import { loaddone } from "./loaddone.ts";
//@ts-ignore
import { routerpagegethandler } from "./routerpageget.ts";
//@ts-ignore
import { 内容调整左边偏移 } from "./内容调整左边偏移.ts";
//@ts-ignore
import { 窄屏隐藏侧边栏 } from "./窄屏隐藏侧边栏.ts";
//@ts-ignore
import { sidebarscroll } from "./sidebarscroll.ts";
eventtarget.addEventListener("load", loaddone);
eventtarget.addEventListener("load", () => {
    Adjustthedistance();
});
eventtarget.addEventListener(
    "mount",
    () => {
        let timer = setInterval(() => {
            Adjustthedistance();
        }, 30);
        setTimeout(() => {
            clearInterval(timer);
        }, 200);
    },
    { once: true }
);
eventtarget.addEventListener("load", anchorscroll);
eventtarget.addEventListener("load", sidebarscroll);

eventtarget.addEventListener(
    "mount",

    () => {
        window.addEventListener("hashchange", routerpagegethandler);

        window.addEventListener("resize", Adjustthedistance);
        window.addEventListener("resize", 内容调整左边偏移);
    },
    { once: true }
);
eventtarget.addEventListener(
    "mount",
    () => {
        窄屏隐藏侧边栏();
    },
    { once: true }
);
