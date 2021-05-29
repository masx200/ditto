// import marked from "marked";
import { escape_html } from "./escape_html.js";
import { unescape_html } from "./unescape_html.js";

export async function escapemarkedunescape(data: string) {
    var module = await import("marked");
    //console.log(module);
    var marked = module.default;
    data = marked(escape_html(data));
    data = unescape_html(data);
    return data;
}
