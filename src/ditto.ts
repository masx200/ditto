//@ts-ignore
import config from "./config.ts";
//@ts-ignore
import { ApphomeVm } from "./mark-down-reader.ts";

export const cachemarkdown = new Map();
("use strict");

var ditto = {
    ...config,
};

export function show_loading() {
    Reflect.set(ApphomeVm, "showload", true);
}
export function stop_loading() {
    Reflect.set(ApphomeVm, "showload", false);
}

export default ditto;
