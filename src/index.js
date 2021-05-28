import { config, mount } from "./mark-down-reader.js";
Object.assign(config, {
    doctitle: "markdown-reader",
    subtitle: "Lightweight Markdown Documentation System",
    index: "README.md",

    summary: "summary.md",
    baseurl: "https://cdn.jsdelivr.net/gh/masx200/markdown-reader@3.2.0/",
});
mount(document.getElementById("root"));
