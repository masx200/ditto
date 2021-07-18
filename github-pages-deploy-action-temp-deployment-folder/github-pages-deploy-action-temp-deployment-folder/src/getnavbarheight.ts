//@ts-ignore
import { getappvm } from "./appvm.ts";

export function getnavbarheight() {
    const appvm = getappvm();
    var height =
        appvm.mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95.clientHeight;
    return height;
}
