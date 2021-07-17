import Vue from "vue";
//@ts-ignore
import { getappvm } from "./appvm.ts"; //@ts-ignore

export async function sidebarscroll() {
    const appvm = getappvm();

    let path = Reflect.get(appvm, "urltext");
    await Vue.nextTick();

    try {
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
    } catch (e) {
        console.error(e);
    }
}

export function scrolltoelement(e: Element) {
    // console.log(e.offsetTop);
    e.scrollIntoView({
        behavior: "smooth",

        inline: "center",
        block: "center",
    });
}
