function debounce(fn, delay = 0) {
    var timer;
    return function (...args) {
        clearTimeout(timer);
        return new Promise((r) => {
            timer = setTimeout(function () {
                r(Reflect.apply(fn, null, args));
            }, delay);
        });
    };
}
export { debounce };
