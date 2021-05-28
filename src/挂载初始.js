"use strict";
import $ from "jquery";
import config from "./config";
// import ditto from "./ditto";
import { ApphomeVm } from "./mark-down-reader";
import { myonhashchangehandler } from "./onhashchange";
import { 内容调整左边偏移 } from "./render";

export async function 挂载初始() {
    var module = await import("./ditto.js");
    console.log(module);
    var ditto = module.default;
    Object.assign(ditto, config);
    console.log(ditto);

    var doctitle = config.doctitle;
    var subtitle = config.subtitle;

    ditto.index = config.index;

    document.title = doctitle + " " + subtitle;
    ApphomeVm.mytitle = doctitle;
    $("#mybody-143af32b9b8f396b798aeb8d4ee68ed9ca3").css(
        "padding-top",
        $("#mynavigationbar-dceff036a563faf668b4d4a50fd702d1d95").height()
    );

    window.addEventListener("hashchange", myonhashchangehandler);
    window.addEventListener("hashchange", 内容调整左边偏移);
    window.addEventListener("resize", myonhashchangehandler);
    window.addEventListener("resize", 内容调整左边偏移);
    return ditto.run();
}
