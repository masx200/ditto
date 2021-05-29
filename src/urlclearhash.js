export function urlclearhash(path) {
    var tmpurl = new URL(path);
    tmpurl.hash = "";
    path = tmpurl.href;
    return path.split("#")[0];
}
