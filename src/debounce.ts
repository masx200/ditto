/**
 *
 * @param fn {Function}   实际要执行的函数
 * @param delay {Number}  延迟时间，也就是阈值，单位是毫秒（ms）
 *
 * @return {Function}     返回一个“去弹跳”了的函数
 */
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
