if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const l={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return l;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-7027d4db"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./10.29805277d1a740904074.js",revision:null},{url:"./11.c5c5a5fff3244d437634.js",revision:null},{url:"./12.5ee543b9dd51916511c4.js",revision:null},{url:"./13.56007213fcbf3c291e39.js",revision:null},{url:"./14.0c1a7a1e18243e71caf9.js",revision:null},{url:"./3.475e1fd8d7bbd5b80b63.js",revision:null},{url:"./4.d67cb24ba14542272aa5.js",revision:null},{url:"./5.31eda1b11db97b2cb789.js",revision:null},{url:"./5.31eda1b11db97b2cb789.js.LICENSE.txt",revision:"5b8abc649cf29de3b5de419a078d8c6c"},{url:"./6.ee36ae7229799b53b29d.js",revision:null},{url:"./7.badfaba3a6189063cb82.js",revision:null},{url:"./7.badfaba3a6189063cb82.js.LICENSE.txt",revision:"89123cce5ef7332db0f52238d5ccde29"},{url:"./8.f01c6773fbab119f8a72.js",revision:null},{url:"./9.217947eaced58215bfe9.js",revision:null},{url:"./favicon.ico",revision:"ac998ede0f8d84c3461f35ecd476c444"},{url:"./index.html",revision:"ff965e3b208413b86da2b3da271faa8c"},{url:"./javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;.1feff74faaf0efc6a044355c92cd15d9.bin",revision:null},{url:"./main.90094c0647f6c2bd3460.js",revision:null},{url:"./runtime.e5e9e59eeaee76409052.js",revision:null},{url:"./style.2e61137d18d3dba0db9a.css",revision:null}],{}),e.registerRoute(/.*\.(?:js|html|\/)$/,new e.NetworkFirst,"GET"),e.registerRoute(/.*\.(?:xml|json|md|css)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]}),"GET")}));
