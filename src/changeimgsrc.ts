export function changeimgsrc(tmpdoc: Document, summaryfile: string) {
    Array.from(tmpdoc.body.querySelectorAll("img")).forEach((e) => {
        var imgsrc = e.getAttribute("src");

        if (
            imgsrc &&
            !imgsrc.startsWith("http://") &&
            !imgsrc.startsWith("https://")
        ) {
            var imgrealurl = String(new URL(imgsrc, summaryfile));

            e.src = imgrealurl;
            e.loading = "lazy";
        }
    });
}
