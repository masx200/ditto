import config from "./config.js";
export function getbaseurl() {
    return config.baseurl;
}
export function getabsoluteindex() {
    return String(new URL(config.index, config.baseurl));
}
export function getabsolutesummary() {
    return String(new URL(config.summary, config.baseurl));
}
