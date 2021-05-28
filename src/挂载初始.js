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
    window.addEventListener("resize", () => {
        内容调整左边偏移();
    });

    var doctitle = config.doctitle;
    var subtitle = config.subtitle;

    ditto.index = config.index;

    document.title = doctitle + " " + subtitle;
    ApphomeVm.mytitle = doctitle;
    $("#my主体").css("padding-top", $("#mynavigationbar").height());

    window.addEventListener("hashchange", myonhashchangehandler);
    return ditto.run();
}
