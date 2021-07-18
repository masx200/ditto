export function unescape_html(string: string) {
    return string.replace(/&amp;#92;/g, "\\").replace(/&amp;#95;/g, "_");
}
