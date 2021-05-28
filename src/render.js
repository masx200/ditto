"use strict";
import $ from "jquery";
export function 内容调整左边偏移() {
    return new Promise((r) => {
        requestAnimationFrame(() => {
            if (window.innerWidth > 550) {
                var 左边偏移量 =
                    $("#cebianlan")[0].offsetWidth -
                    $("#contentcontainer").offset().left;
                左边偏移量 = Math.max(左边偏移量, 20);
                $("#contentcontainer").css({ "padding-left": 左边偏移量 + 20 });
            } else {
                $("#contentcontainer").css({ "padding-left": 20 });
            }
            r();
        });
    });
}
