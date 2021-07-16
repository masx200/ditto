import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";
import "./addEventListener.ts";
import "./error-alert.ts";
import "./loaddone.ts";
import "./styles.ts";


function start() {
    (async () => {
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

start();
