import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";
import Vue from "vue";
import "./addEventListener.ts";
import { components } from "./components";
import "./error-alert.ts";
import "./loaddone.ts";
//@ts-ignore
import "./polyfill.js";
// import { states } from "./states";
import "./styles.ts";

function start() {
    var rootele =
        document.getElementById("root") ||
        document.body.appendChild(document.createElement("div"));

    Object.assign(rootele, { id: "root" });

    const { mount } = require("./mark-down-reader");

    rootele && mount(rootele);
    //  })();
}

window.addEventListener("load", loadclipboard, { once: true });
async function loadclipboard() {
    var module = await import("clipboard");

    const ClipboardJS = module.default;

    new ClipboardJS(".btn").on("success", function (e: ClipboardJS.Event) {
        // console.info("Text:", e.text);

        e.clearSelection();
    });
}

Object.entries(components).forEach(([key, value]) => {
    Vue.component(key, value);
});

start();
