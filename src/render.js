"use strict";
import $ from "jquery";
export function 内容调整左边偏移() {
    return new Promise((r) => {
        requestAnimationFrame(() => {
            if (window.innerWidth > 550) {
                var 左边偏移量 =
                    $("#cebianlan-720feeaf8ee88a6b9b9399876713ed78af4")[0]
                        .offsetWidth -
                    $(
                        "#contentcontainer-9ce8d13b9be97b46e89aeea8f242169cfa1"
                    ).offset().left;
                左边偏移量 = Math.max(左边偏移量, 20);
                $("#contentcontainer-9ce8d13b9be97b46e89aeea8f242169cfa1").css({
                    "padding-left": 左边偏移量 + 20,
                });
            } else {
                $("#contentcontainer-9ce8d13b9be97b46e89aeea8f242169cfa1").css({
                    "padding-left": 20,
                });
            }
            r();
        });
    });
}
