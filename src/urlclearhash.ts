export function urlclearhash(path: string) {
    var tmpurl = new URL(path);
    tmpurl.hash = "";
    var href = tmpurl.href;

    return href.split("#")[0];
}
