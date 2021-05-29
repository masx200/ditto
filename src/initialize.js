import hljs from "./highlight.min.js";
import { init_sidebar_section } from "./init_sidebar_section.js";
import { routerpageget } from "./routerpageget.js";
import { menulist } from "./menulist.js";
import { getabsoluteindex } from "./getbaseurl.js";
import { urlclearhash } from "./urlclearhash.js";
export async function initialize() {
    window.addEventListener("hashchange", routerpageget);
    menulist.push(urlclearhash(getabsoluteindex()));
    await init_sidebar_section();
    await routerpageget();
    hljs.highlightAll();
}
