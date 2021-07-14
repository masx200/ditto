//@ts-ignore
import { getappvm } from "./appvm.ts"; //@ts-ignore
//@ts-ignore
import { debounce } from "./debounce.ts";
("use strict");
//@ts-ignore

export const 内容调整左边偏移 = debounce(() => {
    const appvm = getappvm();
    return new Promise<void>((r) => {
        requestAnimationFrame(() => {
            if (window.innerWidth > 550) {
                var width =
                    appvm.Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644
                        .offsetWidth + "px";

                appvm.contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1.style[
                    "padding-left"
                ] = width;
            } else {
                appvm.contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1.style[
                    "padding-left"
                ] = 0;
            }

            r();
        });
    });
});
