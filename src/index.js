import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";
import { config, mount } from "./mark-down-reader.js";
Object.assign(config, {
    doctitle: "markdown-reader",
    subtitle: "Lightweight Markdown Documentation System",
    index: "README.md",

    summary: "summary.md",
    baseurl: "https://cdn.jsdelivr.net/gh/masx200/markdown-reader@3.0.1/",
});
mount(document.getElementById("root"));
