export function scrolltotop() {
    router.transformparams((o: any) => ({ ...o, id: "top" }));
    scrollTo(0, 0);
}
//@ts-ignore
import { router } from "./hashrouter.ts";
