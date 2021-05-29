import { config, mount } from "./export.js";
Object.assign(config, {
    doctitle: "Markdown Reader",
    subtitle: "Lightweight Markdown Documentation System",
    index: "README.md",
    summary: "summary.md",
    baseurl: "https://masx200.github.io/markdown-reader/",
});
var rootele = document.getElementById("root");
rootele && mount(rootele);
