import { config, mount } from "./export.js";
Object.assign(config, {
    doctitle: "Markdown Reader",
    subtitle: "Lightweight Markdown Documentation System",
    index: "README.md",

    summary: "summary.md",
    baseurl: "https://cdn.jsdelivr.net/gh/masx200/markdown-reader@latest/",
});
mount(document.getElementById("root"));
