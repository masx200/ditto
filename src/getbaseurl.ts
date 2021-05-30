import config from "./config.js";

export function getbaseurl() {
    return config.baseurl;
}
export function getabsoluteindex() {
    return String(new URL(config.homepage, config.baseurl));
}
export function getabsolutesummary() {
    return String(new URL(config.catalogue, config.baseurl));
}
