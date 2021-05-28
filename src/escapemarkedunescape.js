// import marked from "marked";
import { escape_html } from "./escape_html";
import { unescape_html } from "./unescape_html";

export async function escapemarkedunescape(data) {
    var module = await import("marked");
    console.log(module);
    var marked = module.default;
    data = marked(escape_html(data));
    data = unescape_html(data);
    return data;
}
