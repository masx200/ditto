function debounce(fn, delay = 0) {
    var timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            Reflect.apply(fn, null, args);
        }, delay);
    };
}
export { debounce };
