import { getappvm } from "./appvm";
import { states } from "./states";

export function setsidebarrighthtml(): any {
    const appvm = getappvm();
    const { cachesubheaders } = states;
    const { urltext } = appvm;
    Reflect.set(appvm, "sidebarrighthtml", cachesubheaders.get(urltext));
}
