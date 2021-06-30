import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";
import VueCompositionAPI from "@vue/composition-api";
import Vue from "vue";
import "./error-alert.ts";
import "./styles.ts";

Vue.use(VueCompositionAPI);

(async () => {
    //@ts-ignore
    const config = (await import("./config.ts")).default;

    // console.log(config);
    var rootele =
        document.getElementById("root") ||
        document.body.appendChild(document.createElement("div"));

    Object.assign(rootele, { id: "root" });
    const module = await import(
        //@ts-ignore
        "./export.ts"
    );
    const { mount } = module; //@ts-ignore
    rootele && mount(rootele);
})();
window.addEventListener("load", loadclipboard, { once: true });
async function loadclipboard() {
    var module = await import("clipboard");

    const ClipboardJS = module.default;

    new ClipboardJS(".btn").on("success", function (e: ClipboardJS.Event) {
        // console.info("Text:", e.text);

        e.clearSelection();
    });
}
