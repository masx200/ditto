//@ts-ignore
import { getappvm } from "./appvm.ts"; //@ts-ignore

export function show_loading() {
    const appvm = getappvm();
    Reflect.set(appvm, "showload", true);
}
export function stop_loading() {
    const appvm = getappvm();
    Reflect.set(appvm, "showload", false);
}
