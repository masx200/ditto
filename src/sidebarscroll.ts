import Vue from "vue";
//@ts-ignore
import { getappvm } from "./appvm.ts"; //@ts-ignore

export function sidebarscroll() {
    const appvm = getappvm();

    let path = Reflect.get(appvm, "urltext");
    const links = Array.from(
        appvm.getsidebarele().querySelectorAll("a")
    ) as HTMLAnchorElement[];
    // console.log(links)
    links.forEach((e: HTMLAnchorElement) => {
        if (e.hash === "#" + path) {
            requestAnimationFrame(async () => {
                await Vue.nextTick();
                requestAnimationFrame(() => {
                    // console.log(e.offsetTop);

                    // console.log(e);
                    //@ts-ignore
                    requestIdleCallback(() => {
                        scrolltoelement(e);
                    });
                });
            });
        }
    });
}

export function scrolltoelement(e: HTMLElement) {
    // console.log(e.offsetTop);
    e.scrollIntoView({
behavior:"smooth",

 inline: "nearest", block: "nearest" });
}
