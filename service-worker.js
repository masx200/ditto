if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,l)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}}))).then((e=>{const r=l(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-7027d4db"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./10.4d744f0cc23ebf22c780.js",revision:null},{url:"./11.6a077738a32b501d3979.js",revision:null},{url:"./12.8c5b30ef865580a3e7b9.js",revision:null},{url:"./13.606eda139bd32e7ca0f4.js",revision:null},{url:"./14.4ebc7d155c81f5b33751.js",revision:null},{url:"./15.45921651562063ae47e1.js",revision:null},{url:"./3.475e1fd8d7bbd5b80b63.js",revision:null},{url:"./4.3dfcdf68fbdb4d7c912c.js",revision:null},{url:"./5.44f80ea910f00c4d093c.js",revision:null},{url:"./5.44f80ea910f00c4d093c.js.LICENSE.txt",revision:"5b8abc649cf29de3b5de419a078d8c6c"},{url:"./6.a1a3c214f42620915536.js",revision:null},{url:"./7.89ef9dc4c5ef1a5cfd7f.js",revision:null},{url:"./8.962c1849b641af15fe17.js",revision:null},{url:"./8.962c1849b641af15fe17.js.LICENSE.txt",revision:"89123cce5ef7332db0f52238d5ccde29"},{url:"./9.b81bf03292ada0de22e8.js",revision:null},{url:"./favicon.ico",revision:"ac998ede0f8d84c3461f35ecd476c444"},{url:"./index.html",revision:"d6f873d99863910774dc225e8e8d9379"},{url:"./javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;.1feff74faaf0efc6a044355c92cd15d9.bin",revision:null},{url:"./main.bd4ea7b40ece8552ed3c.js",revision:null},{url:"./runtime.4a9c1414ed3a2ce44176.js",revision:null},{url:"./style.7f7280d0e100cb34bfb7.css",revision:null}],{}),e.registerRoute(/.*\.(?:js|html|\/)$/,new e.NetworkFirst,"GET"),e.registerRoute(/.*\.(?:xml|json|md|css)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]}),"GET")}));
