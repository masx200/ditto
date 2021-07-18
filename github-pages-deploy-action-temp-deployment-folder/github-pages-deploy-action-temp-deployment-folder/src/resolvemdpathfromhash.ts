//@ts-ignore
import { getabsoluteindex, getbaseurl } from "./getbaseurl.ts";
//@ts-ignore
import { isrelativepath } from "./isrelativepath.ts";
//@ts-ignore
import { urlclearhash } from "./urlclearhash.ts";
//@ts-ignore
import { router } from "./hashrouter.ts";
//@ts-ignore
import { addendmd } from "./getbaseurl.ts";
export function resolvemdpathfromhash(): string {
    const baseurl = getbaseurl();
    var path;
    const params = router.getparams();
    // console.log(params)
    if (Reflect.has(params, "md")) {
        path = Reflect.get(params, "md");
    } else {
        path =
            location.hash === "" || location.hash === "#"
                ? getabsoluteindex()
                : location.hash.replace("#", "");
    }

    path = path.endsWith(".md") ? path : path + ".md";
    if (isrelativepath(path)) {
        path = new URL(path, baseurl).toString();
    }

    path = urlclearhash(path);
    path = addendmd(path);
    return path;
}
