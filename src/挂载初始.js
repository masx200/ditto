"use strict";
import $ from "jquery";
import { Adjustthedistance } from "./Adjustthedistance.js";
import config from "./config.js";
import { ApphomeVm } from "./mark-down-reader.js";
import { 内容调整左边偏移 } from "./render.js";
export async function 挂载初始() {
    var module = await import("./ditto.js");
    var ditto = module.default;
    Object.assign(ditto, config);
    var maintitle = config.maintitle;
    var subtitle = config.subtitle;
    document.title = maintitle + " " + subtitle;
    ApphomeVm.mytitle = maintitle;
    $("#mybody-143af32b9b8f396b798aeb8d4ee68ed9ca3").css(
        "padding-top",
        Number(
            $("#mynavigationbar-dceff036a563faf668b4d4a50fd702d1d95").height()
        )
    );
    window.addEventListener("hashchange", Adjustthedistance);
    window.addEventListener("hashchange", 内容调整左边偏移);
    window.addEventListener("resize", Adjustthedistance);
    window.addEventListener("resize", 内容调整左边偏移);
    return ditto.run();
}
