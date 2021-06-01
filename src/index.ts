import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";
import VueCompositionAPI from "@vue/composition-api";
import Vue from "vue";
import "./error-alert.js";
import "./styles.js";

Vue.use(VueCompositionAPI);

(async () => {
    const module = await import("./export.js");
    const { config, mount } = module;
    //import { config, mount } from "./export.js";
    Object.assign(config, {
        maintitle: "Markdown Reader",
        subtitle: "Lightweight Markdown Documentation System",
        homepage: "README.md",

        catalogue: "summary.md",
        baseurl: "https://masx200.github.io/markdown-reader/",
    });
    var rootele = document.getElementById("root");
    rootele && mount(rootele);
})();
window.addEventListener("load", loadclipboard, { once: true });
async function loadclipboard() {
    var module = await import("clipboard");

    //console.log(module);
    const ClipboardJS = module.default;

    // ((ClipboardJS) => {
    new ClipboardJS(".btn").on("success", function (e: ClipboardJS.Event) {
        // if (!e.text) {
        //     //console.log("复制内容空");
        // } else {
        console.info("Text:", e.text);
        // }

        e.clearSelection();
    });
}
