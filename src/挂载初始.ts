"use strict";

import config from "./config.js";
import { initialize } from "./initialize.js";

import { ApphomeVm } from "./mark-down-reader.js";

export async function 挂载初始() {
    var module = await import("./ditto.js");

    var ditto = module.default;
    Object.assign(ditto, config);

    var maintitle = config.maintitle;
    var subtitle = config.subtitle;

    document.title = maintitle + " " + subtitle;
    Reflect.set(ApphomeVm, "mytitle", maintitle);

    return initialize();
}
