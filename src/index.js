import { config, mount } from "./export.js";
Object.assign(config, {
    doctitle: "Markdown Reader",
    subtitle: "Lightweight Markdown Documentation System",
    index: "README.md",
    summary: "summary.md",
    baseurl: "https://cdn.jsdelivr.net/gh/masx200/markdown-reader@latest/",
});
var rootele = document.getElementById("root");
rootele && mount(rootele);
