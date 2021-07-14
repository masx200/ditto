"use strict";
//@ts-ignore
import config from "./config.ts";
//@ts-ignore
import { initialize } from "./initialize.ts";

export async function 挂载初始() {
    var maintitle = config.maintitle;

    document.title = maintitle;

    return initialize();
}
