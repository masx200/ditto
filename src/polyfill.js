if ("production" === process.env.NODE_ENV) {
    require("https://polyfill.io/v3/polyfill.min.js?features=requestIdleCallback");
}
