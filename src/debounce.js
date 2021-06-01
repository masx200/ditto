function debounce(fn, delay = 0) {
    var timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn(...args);
        }, delay);
    };
}
export { debounce };
