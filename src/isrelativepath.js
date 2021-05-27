export function isrelativepath(src) {
    return !src.startsWith("http://") && !src.startsWith("https://");
}
