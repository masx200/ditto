export function isrelativepath(src: string) {
    return !src.startsWith("http://") && !src.startsWith("https://");
}
