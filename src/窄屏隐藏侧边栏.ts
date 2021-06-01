"use strict";
import { debounce } from "./debounce";
import { ApphomeVm } from "./mark-down-reader.js";

export function 窄屏隐藏侧边栏() {
    return debounce(() => {
        if (window.innerWidth < 550) {
            Reflect.set(ApphomeVm, "xianshicebianlan", false);
            //@ts-ignore
            // ApphomeVm.xianshicebianlan = false;
        }
    })();
}
