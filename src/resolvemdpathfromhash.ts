//@ts-ignore
import { getabsoluteindex, getbaseurl } from "./getbaseurl.ts";
//@ts-ignore
import { isrelativepath } from "./isrelativepath.ts";
//@ts-ignore
import { urlclearhash } from "./urlclearhash.ts";

export function resolvemdpathfromhash() {
    const baseurl = getbaseurl();

    var path =
        location.hash === "" || location.hash === "#"
            ? getabsoluteindex()
            : location.hash.replace("#", "");

    path = path.endsWith(".md") ? path : path + ".md";
    if (isrelativepath(path)) {
        path = new URL(path, baseurl).toString();
    }

    path = urlclearhash(path);
    return path;
}
