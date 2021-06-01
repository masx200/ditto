"use strict";

import config from "./config.js";
import { initialize } from "./initialize.js";
// import ditto from "./ditto";
import { ApphomeVm } from "./mark-down-reader.js";

export async function 挂载初始() {
    var module = await import("./ditto.js");
    //console.log(module);
    var ditto = module.default;
    Object.assign(ditto, config);
    //console.log(ditto);

    var maintitle = config.maintitle;
    var subtitle = config.subtitle;

    document.title = maintitle + " " + subtitle;
    Reflect.set(ApphomeVm, "mytitle", maintitle);

    // return ditto.run();
    return initialize();
}
