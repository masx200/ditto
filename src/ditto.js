import jQuery from "jquery";
import config from "./config.js";
import hljs from "./highlight.min.js";
import { init_sidebar_section } from "./init_sidebar_section";
import { routerpageget } from "./routerpageget";
export const $ = jQuery;

export const cachemarkdown = new Map();
("use strict");

var loading_interval;
var loading_id = $("#loading");
var error_id = $("#error");
var ditto = {
    run: initialize,
    ...config,
};
async function initialize() {
    //Deprecated as of 10.6.0. initHighlightingOnLoad() is deprecated.  Use highlightAll() instead.

    window.addEventListener("hashchange", routerpageget);
    await init_sidebar_section();
    await routerpageget();
    hljs.highlightAll();
}
export function show_error(err_msg) {
    error_id.html(err_msg);
    error_id.show();
}
export function hide_errors() {
    error_id.hide();
}
export function show_loading() {
    loading_id.show();
    loading_interval = setInterval(function () {
        loading_id.fadeIn(1000).fadeOut(1000);
    }, 2000);
}
export function stop_loading() {
    clearInterval(loading_interval);
    loading_id.hide();
    $("#loadingparent").hide();
}

export default ditto;
