function debounce(
    fn: (...arg: any[]) => any,
    delay: number = 0
): (...arg: any[]) => any {
    var timer: ReturnType<typeof setTimeout>;

    return function (...args: any[]): any {
        clearTimeout(timer);

        timer = setTimeout(function () {
            Reflect.apply(fn, null, args);
        }, delay);
    };
}
export { debounce };
