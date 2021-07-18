if ("production" === process.env.NODE_ENV) {
    if ("function" !== typeof requestIdleCallback) {
        importScripts(
            "https://polyfill.io/v3/polyfill.min.js?features=requestIdleCallback"
        );
    }
}
import importScripts from "./importscripts.js";

//@ts-ignore
import "./polyfill.NodeList.forEach.ts";
