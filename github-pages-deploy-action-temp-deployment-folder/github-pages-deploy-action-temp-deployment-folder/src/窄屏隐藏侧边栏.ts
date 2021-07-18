"use strict";
//@ts-ignore
import { debounce } from "./debounce.ts";
//@ts-ignore

//@ts-ignore
import { getappvm } from "./appvm.ts"; //@ts-ignore
export const 窄屏隐藏侧边栏 = debounce(() => {
    const appvm = getappvm();
    if (window.innerWidth < 550) {
        Reflect.set(appvm, "xianshicebianlan", false);
    }
});
