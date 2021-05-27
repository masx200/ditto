const fetchajaxgettext = async function (u) {
    const r = await fetch(u);

    if (!r.ok) {
        throw new Error("fetch failed:" + "status:" + r.status + "\n" + u);
    } else if (!r.headers.get("content-type").startsWith("text/markdown")) {
        throw new Error(
            "fetch failed:" +
                "content-type:" +
                r.headers.get("content-type") +
                "\n" +
                u
        );
    } else {
        return r.text();
    }
};
export default fetchajaxgettext;
