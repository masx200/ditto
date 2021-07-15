//@ts-ignore
import { router } from "./hashrouter.ts";
//@ts-ignore
import { resolvemdpathfromhash } from "./resolvemdpathfromhash.ts";

export function scrolltobottom() {
    const md = resolvemdpathfromhash();
    const id = "bottom";
    router.transformparams({ md, id });
    scrollTo(0, document.body.scrollHeight);
}
