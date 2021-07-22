import Vue from "vue";
//@ts-ignore
import { getappvm } from "./appvm.ts"; //@ts-ignore
import { scrolltoelement } from "./scrolltoelement";

export async function sidebarscroll() {
    const appvm = getappvm();

    let path = Reflect.get(appvm, "urltext");
    await Vue.nextTick();

    try {
        const links = Array.from(
            (await appvm.getsidebarele()).querySelectorAll("a")
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
