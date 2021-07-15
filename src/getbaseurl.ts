//@ts-ignore
import config from "./config.ts";
//@ts-ignore
import { urlclearhash } from "./urlclearhash.ts";
export function getbaseurl(): string {
    return config.baseurl;
}
export function getabsoluteindex(): string {
    return urlclearhash(String(new URL(config.homepage, config.baseurl)));
}
export function getabsolutesummary(): string {
    return urlclearhash(String(new URL(config.catalogue, config.baseurl)));
}
