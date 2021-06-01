"use strict";
import { debounce } from "./debounce";
import { ApphomeVm } from "./mark-down-reader.js";
export const 窄屏隐藏侧边栏 = debounce(() => {
    if (window.innerWidth < 550) {
        Reflect.set(ApphomeVm, "xianshicebianlan", false);
    }
});
