"use strict";
import { ApphomeVm } from "./mark-down-reader";
import $ from "jquery";

export function myonhashchangehandler() {
    scrollTo(0, 0);
    $("#my主体").css("padding-top", $("#my导航栏").height());
    if (window.innerWidth < 550) {
        ApphomeVm.xianshicebianlan = false;
    }
}
