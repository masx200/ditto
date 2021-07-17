//@ts-ignore
import { getappvm } from "./appvm.ts"; //@ts-ignore
//@ts-ignore
import { debounce } from "./debounce.ts";
//@ts-ignore
import { getnavbarheight } from "./getnavbarheight.ts";
("use strict");
import Vue from "vue";
export const Adjustthedistance = debounce(async () => {
    await Vue.nextTick();
    return new Promise<void>((r) => {
        requestAnimationFrame(() => {
            调整主体部分和导航栏的距离();

            r();
        });
    });
});

function 调整主体部分和导航栏的距离() {
    const appvm = getappvm();
    var height = getnavbarheight();
    appvm.top = height + "px";
    var width = getsidebarwidth();
    if (appvm.widescreen) {
        appvm.left = width + "px";
    } else {
        appvm.left = "0";
    }
}
function getsidebarwidth() {
    const appvm = getappvm();
    var width = appvm.getsidebarele().clientWidth;
    return width;
}
