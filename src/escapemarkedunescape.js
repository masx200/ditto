import marked from "marked";
import { escape_html } from "./escape_html";
import { unescape_html } from "./unescape_html";

export function escapemarkedunescape(data) {
    data = marked(escape_html(data));
    data = unescape_html(data);
    return data;
}
