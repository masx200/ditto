import Vue from "vue";
//@ts-ignore
import { getappvm } from "./appvm.ts"; //@ts-ignore

export function sidebarscroll() {
    const appvm = getappvm();
    let path = Reflect.get(appvm, "urltext");
    const links = Array.from(
        appvm.Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644.querySelectorAll(
            "a"
        )
    ) as HTMLAnchorElement[];
    // console.log(links)
    links.forEach((e: HTMLAnchorElement) => {
        if (e.hash === "#" + path) {
            requestAnimationFrame(async () => {
                await Vue.nextTick();
                requestAnimationFrame(() => {
                    console.log(e.offsetTop);

                    console.log(e);
                    scrolltoelement(e);
                });
            });
        }
    });
}

function scrolltoelement(e: HTMLElement) {
    console.log(e.offsetTop);
    e.scrollIntoView({ inline: "nearest", block: "nearest" });
}
