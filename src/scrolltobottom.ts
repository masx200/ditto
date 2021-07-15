export function scrolltobottom() {
    router.transformparams((o: any) => ({ ...o, id: "bottom" }));
    scrollTo(0, document.body.scrollHeight);
}
//@ts-ignore
import { router } from "./hashrouter.ts";
