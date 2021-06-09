import { escape_html } from "./escape_html.ts";
import { unescape_html } from "./unescape_html.ts";
export async function escapemarkedunescape(data) {
    var module = await import("marked");
    var marked = module.default;
    data = marked(escape_html(data));
    data = unescape_html(data);
    return data;
}
