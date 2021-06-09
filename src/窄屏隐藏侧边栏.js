"use strict";
import { debounce } from "./debounce.ts";
import { ApphomeVm } from "./mark-down-reader.ts";
export const 窄屏隐藏侧边栏 = debounce(() => {
    if (window.innerWidth < 550) {
        Reflect.set(ApphomeVm, "xianshicebianlan", false);
    }
});
