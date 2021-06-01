"use strict";
import { debounce } from "./debounce";
import { ApphomeVm } from "./mark-down-reader.js";
import {
    mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3,
    mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95,
    Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644,
} from "./refele.js";
export function Adjustthedistance() {
    debounce(() => {
        return new Promise<void>((r) => {
            requestAnimationFrame(() => {
                调整侧边栏和导航栏的距离();
                调整主体部分和导航栏的距离();

                r();
            });
        });
    })();
}

export function 窄屏隐藏侧边栏() {
    if (window.innerWidth < 550) {
        Reflect.set(ApphomeVm, "xianshicebianlan", false);
        //@ts-ignore
        // ApphomeVm.xianshicebianlan = false;
    }
}
function 调整侧边栏和导航栏的距离() {
    var height =
        mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95.value.clientHeight +
        "px";
    // console.log(height);
    Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644.value.style.top = height;
}
function 调整主体部分和导航栏的距离() {
    var height =
        mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95.value.clientHeight +
        "px";
    // console.log(height);
    mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3.value.style["margin-top"] =
        height;
}
