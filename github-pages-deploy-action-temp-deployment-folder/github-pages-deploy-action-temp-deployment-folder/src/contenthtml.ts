const contenthtml = {
    set(c: string) {
        const appvm = getappvm();
        Reflect.set(appvm, "contenthtml", c);
    },
};
export { contenthtml };
//@ts-ignore
import { getappvm } from "./appvm.ts"; //@ts-ignore
