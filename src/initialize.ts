//@ts-ignore
import hljs from "./highlight.min.ts";
//@ts-ignore
import { init_sidebar_section } from "./init_sidebar_section.ts";
//@ts-ignore
import { routerpagegethandler } from "./routerpageget.ts";
//@ts-ignore
import { menulist } from "./menulist.ts";
//@ts-ignore
import { getabsoluteindex } from "./getbaseurl.ts";
//@ts-ignore
import { urlclearhash } from "./urlclearhash.ts";
export async function initialize() {
   // menulist.push(urlclearhash(getabsoluteindex()));
    await init_sidebar_section();
    await routerpagegethandler();

    hljs.highlightAll();
}
