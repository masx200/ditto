export function scrolltotop() {
    const md = resolvemdpathfromhash();
    const id = "top";
    router.setparams({ md, id });
    scrollTo(0, 0);
}
//@ts-ignore
import { router } from "./hashrouter.ts";
//@ts-ignore
import { resolvemdpathfromhash } from "./resolvemdpathfromhash.ts";
