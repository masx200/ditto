//@ts-ignore
import config from "./config.ts";
//@ts-ignore
import { urlclearhash } from "./urlclearhash.ts";
export function getbaseurl(): string {
    return config.baseurl;
}
export function getabsoluteindex(): string {
    return addendmd(
        urlclearhash(String(new URL(config.homepage, config.baseurl)))
    );
}
export function getabsolutesummary(): string {
    return addendmd(
        urlclearhash(String(new URL(config.catalogue, config.baseurl)))
    );
}
export function addendmd(url: string) {
    let nu = new URL(url);
    if (!nu.pathname.endsWith(".md")) {
        nu.pathname = nu.pathname + ".md";
    }
    return String(nu);
}
