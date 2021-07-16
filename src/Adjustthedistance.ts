//@ts-ignore
import { getappvm } from "./appvm.ts"; //@ts-ignore
//@ts-ignore
import { debounce } from "./debounce.ts";
//@ts-ignore
import { getnavbarheight } from "./getnavbarheight.ts";
("use strict");
export const Adjustthedistance = debounce(() => {
    return new Promise<void>((r) => {
        requestAnimationFrame(() => {
            // 调整侧边栏和导航栏的距离();
            调整主体部分和导航栏的距离();

            r();
        });
    });
});

function 调整主体部分和导航栏的距离() {
    const appvm = getappvm();
    var height = getnavbarheight();
    // console.log(height)
    appvm.mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3.style["margin-top"] =
        height + "px";
    appvm.Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644.$refs.Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644.style.top =
        height + "px";
}
