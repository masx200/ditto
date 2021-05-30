import { config, mount } from "./export.js";
Object.assign(config, {
    mainitle: "Markdown Reader",
    subtitle: "Lightweight Markdown Documentation System",
    homepage: "README.md",

    catalogue: "summary.md",
    baseurl: "https://masx200.github.io/markdown-reader/",
});
var rootele = document.getElementById("root");
rootele && mount(rootele);
