if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,c)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}}))).then((e=>{const r=c(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-7027d4db"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./10.f2092c7bed6583e58dca.js",revision:null},{url:"./11.2992f06514fecd05939b.js",revision:null},{url:"./12.6c5dcbdde8dea6be534f.js",revision:null},{url:"./13.bd4eee15506cdc03c735.js",revision:null},{url:"./3.475e1fd8d7bbd5b80b63.js",revision:null},{url:"./4.46b21fbf85b248b6aebb.js",revision:null},{url:"./5.fa893ac8623cf7d0b86f.js",revision:null},{url:"./5.fa893ac8623cf7d0b86f.js.LICENSE.txt",revision:"5b8abc649cf29de3b5de419a078d8c6c"},{url:"./6.5aac3abd153c5b0db150.js",revision:null},{url:"./7.260001d4bdf3951ecbea.js",revision:null},{url:"./7.260001d4bdf3951ecbea.js.LICENSE.txt",revision:"89123cce5ef7332db0f52238d5ccde29"},{url:"./8.4126ab5786123450e8a4.js",revision:null},{url:"./9.36ecddf51ff3b1e26c9c.js",revision:null},{url:"./favicon.ico",revision:"ac998ede0f8d84c3461f35ecd476c444"},{url:"./index.html",revision:"0475e8710eb46889aac6ac1b43b10b4b"},{url:"./javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;.1feff74faaf0efc6a044355c92cd15d9.bin",revision:null},{url:"./main.d5fb82e8b48770c13c73.js",revision:null},{url:"./main.e847922c109a7a094ced.css",revision:null},{url:"./runtime.777ef3d5c0639782d367.js",revision:null},{url:"./style.e53c259ae5507a4c963b.css",revision:null}],{}),e.registerRoute(/.*\.(?:js|html|\/)$/,new e.NetworkFirst,"GET"),e.registerRoute(/.*\.(?:xml|json|md|css)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]}),"GET")}));
