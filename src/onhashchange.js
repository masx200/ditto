"use strict";
import $ from "jquery";
import { ApphomeVm } from "./mark-down-reader";

export function myonhashchangehandler() {
    scrollTo(0, 0);
    $("#my主体").css("padding-top", $("#my导航栏").height());
    if (window.innerWidth < 550) {
        ApphomeVm.xianshicebianlan = false;
    }
}
