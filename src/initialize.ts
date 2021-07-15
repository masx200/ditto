//@ts-ignore
// import hljs from "./highlight.min.ts";

//@ts-ignore
import { getabsolutesummary } from "./getbaseurl.ts";
//@ts-ignore
import { init_sidebar_section } from "./init_sidebar_section.ts";
//@ts-ignore
import { resolvemdpathfromhash } from "./resolvemdpathfromhash.ts";
//@ts-ignore
import { routerpagegethandler } from "./routerpageget.ts";

export async function initialize() {
    const summaryfile = getabsolutesummary();
    const path = resolvemdpathfromhash();
    if (Object.is(path, summaryfile)) {
        await init_sidebar_section();
        await routerpagegethandler();
    } else {
        await Promise.all([init_sidebar_section(), routerpagegethandler()]);
    }

    // //@ts-ignore
    // const hljs = (await import("./highlight.min.ts")).default;
    // hljs.highlightAll();
}
