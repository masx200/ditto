"use strict";
import $ from "jquery";
import { ApphomeVm } from "./mark-down-reader";

export function Adjustthedistance() {
    // scrollTo(0, 0);
    $("#mybody-143af32b9b8f396b798aeb8d4ee68ed9ca3").css(
        "padding-top",
        $("#mynavigationbar-dceff036a563faf668b4d4a50fd702d1d95").height()
    );
    if (window.innerWidth < 550) {
        ApphomeVm.xianshicebianlan = false;
    }
}
