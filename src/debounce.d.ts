declare function debounce(
    fn: Function,
    delay?: number
): (...args: any[]) => Promise<any>;
export { debounce };
