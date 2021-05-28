import hljs from "./highlight.min.js";
import { init_sidebar_section } from "./init_sidebar_section";
import { routerpageget } from "./routerpageget";
import { menulist } from "./menulist.js";
import { getabsoluteindex } from "./getbaseurl.js";
import { urlclearhash } from "./urlclearhash.js";
export async function initialize() {
    //Deprecated as of 10.6.0. initHighlightingOnLoad() is deprecated.  Use highlightAll() instead.
    window.addEventListener("hashchange", routerpageget);
    menulist.push(urlclearhash(getabsoluteindex()));
    await init_sidebar_section();
    await routerpageget();
    hljs.highlightAll();
}
