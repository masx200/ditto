export function urlclearhash(path: string) {
    var tmpurl = new URL(path);
    tmpurl.hash = "";
    path = tmpurl.href;

    return path.split("#")[0];
}
