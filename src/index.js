import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";
import VueCompositionAPI from "@vue/composition-api";
import Vue from "vue";
import "./error-alert.ts";
import "./styles.ts";
Vue.use(VueCompositionAPI);
(async () => {
    const config = (await import("./config.ts")).default;
    Object.assign(config, {
        maintitle: "Markdown Reader",
        subtitle: "Lightweight Markdown Documentation System",
        homepage: "README.md",
        catalogue: "summary.md",
        baseurl: "https://cdn.jsdelivr.net/gh/masx200/markdown-reader/",
    });
    console.log(config);
    var rootele = document.getElementById("root");
    const module = await import("./export.ts");
    const { mount } = module;
    rootele && mount(rootele);
})();
window.addEventListener("load", loadclipboard, { once: true });
async function loadclipboard() {
    var module = await import("clipboard");
    const ClipboardJS = module.default;
    new ClipboardJS(".btn").on("success", function (e) {
        console.info("Text:", e.text);
        e.clearSelection();
    });
}
