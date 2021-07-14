//@ts-ignore
import { escape_html } from "./escape_html.ts";
//@ts-ignore
import { unescape_html } from "./unescape_html.ts";

export async function escapemarkedunescape(data: string, opts = {}) {
    var module = await import("marked");

    var marked = module.default;
    data = marked(escape_html(data), opts);
    data = unescape_html(data);
    console.log(data);
    return data;
}
