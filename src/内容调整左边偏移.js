"use strict";
import { debounce } from "./debounce";
import {
    contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1,
    Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644,
} from "./refele";
export function 内容调整左边偏移() {
    return debounce(() => {
        return new Promise((r) => {
            requestAnimationFrame(() => {
                if (window.innerWidth > 550) {
                    var width =
                        Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644.value
                            .offsetWidth + "px";
                    contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1.value.style[
                        "padding-left"
                    ] = width;
                } else {
                    contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1.value.style[
                        "padding-left"
                    ] = 0;
                }
                r();
            });
        });
    })();
}
