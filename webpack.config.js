const webpackconfig = Object.assign(
    {},
    require("@masx200/webpack-react-vue-spa-awesome-config")
);
const RemotePlugin = require("remote-webpack-plugin");
if ("production" === process.env.NODE_ENV) {
    webpackconfig.entry = [
        require.resolve("@masx200/ie11-usual-polyfills"),
        ...webpackconfig.entry,
    ];
}
webpackconfig.plugins = [new RemotePlugin(), ...webpackconfig.plugins];
console.log(webpackconfig);
module.exports = webpackconfig;
