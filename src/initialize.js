import hljs from "./highlight.min.ts";
import { init_sidebar_section } from "./init_sidebar_section.ts";
import { routerpagegethandler } from "./routerpageget.ts";
import { menulist } from "./menulist.ts";
import { getabsoluteindex } from "./getbaseurl.ts";
import { urlclearhash } from "./urlclearhash.ts";
export async function initialize() {
    menulist.push(urlclearhash(getabsoluteindex()));
    await init_sidebar_section();
    await routerpagegethandler();
    hljs.highlightAll();
}
