//@ts-ignore
//@ts-ignore

export const cachemarkdown = new Map<string, string>();
("use strict");

export function show_loading() {
    const appvm = getappvm();
    Reflect.set(appvm, "showload", true);
}
export function stop_loading() {
    const appvm = getappvm();
    Reflect.set(appvm, "showload", false);
}

//export default ditto;

export const cachetitle = new Map<string, string>();
//@ts-ignore
import { getappvm } from "./appvm.ts"; //@ts-ignore
