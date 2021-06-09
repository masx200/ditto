"use strict";
import config from "./config.ts";
import { initialize } from "./initialize.ts";
import { ApphomeVm } from "./mark-down-reader.ts";
export async function 挂载初始() {
    var module = await import("./ditto.ts");
    var ditto = module.default;
    Object.assign(ditto, config);
    var maintitle = config.maintitle;
    document.title = maintitle;
    Reflect.set(ApphomeVm, "mytitle", maintitle);
    return initialize();
}
