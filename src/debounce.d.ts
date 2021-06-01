declare function debounce(
    fn: (...arg: any[]) => any,
    delay?: number
): (...arg: any[]) => any;
export { debounce };
