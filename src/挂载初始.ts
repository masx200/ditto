"use strict";
//@ts-ignore
import config from "./config.ts";
//@ts-ignore
import { initialize } from "./initialize.ts";
//@ts-ignore
import { ApphomeVm } from "./mark-down-reader.ts";

export async function 挂载初始() {
    // var module = await import(
    //@ts-ignore
    //    "./ditto.ts"
    // );

    //var ditto = module.default;
    // Object.assign(ditto, config);

    var maintitle = config.maintitle;

    document.title = maintitle;
    // Reflect.set(ApphomeVm, "mytitle", maintitle);

    return initialize();
}
