if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const l={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return l;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-7027d4db"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./10.1bf726d542cddcd72f64.js",revision:null},{url:"./11.e1104cf906c9ba2a4b4e.js",revision:null},{url:"./12.4f5989ace3437c349025.js",revision:null},{url:"./13.f037034c76a44608f1d2.js",revision:null},{url:"./3.475e1fd8d7bbd5b80b63.js",revision:null},{url:"./4.25d96e77e3cfe844e0ff.js",revision:null},{url:"./5.fa893ac8623cf7d0b86f.js",revision:null},{url:"./5.fa893ac8623cf7d0b86f.js.LICENSE.txt",revision:"5b8abc649cf29de3b5de419a078d8c6c"},{url:"./6.7a9c2b2fb9be78be6ae0.js",revision:null},{url:"./6.7a9c2b2fb9be78be6ae0.js.LICENSE.txt",revision:"783f14fa45b10e088e68f98251448010"},{url:"./7.23b2695192eddc264e28.js",revision:null},{url:"./7.23b2695192eddc264e28.js.LICENSE.txt",revision:"89123cce5ef7332db0f52238d5ccde29"},{url:"./8.24c8eaa5b9d1fe674a2d.js",revision:null},{url:"./9.9c4ff14ac1f06a692d0d.js",revision:null},{url:"./favicon.ico",revision:"ac998ede0f8d84c3461f35ecd476c444"},{url:"./index.html",revision:"d17d378c47b1637f2ccf407608609046"},{url:"./javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;.1feff74faaf0efc6a044355c92cd15d9.bin",revision:null},{url:"./main.73895944c44fc59b9d5b.css",revision:null},{url:"./main.90ee8e288af849b857af.js",revision:null},{url:"./runtime.08ffa4b17da048045479.js",revision:null},{url:"./style.e53c259ae5507a4c963b.css",revision:null}],{}),e.registerRoute(/.*\.(?:js|html|\/)$/,new e.NetworkFirst,"GET"),e.registerRoute(/.*\.(?:xml|json|md|css)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]}),"GET")}));
