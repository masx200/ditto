if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,c)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const l={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return l;default:return e(r)}}))).then((e=>{const r=c(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-7027d4db"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./10.4d22c233b95f0cc13f6c.js",revision:null},{url:"./11.74ca7e079c984d4c4e29.js",revision:null},{url:"./12.ed18dbd1dec887fa8a17.js",revision:null},{url:"./13.540762a7ccab72a11845.js",revision:null},{url:"./14.c3c159247dd394ee2e89.js",revision:null},{url:"./15.fce7b17637a9edbd7eac.js",revision:null},{url:"./3.475e1fd8d7bbd5b80b63.js",revision:null},{url:"./4.e1cffcb1fc67396b9a5a.js",revision:null},{url:"./5.857171ff0c269d9abc35.js",revision:null},{url:"./5.857171ff0c269d9abc35.js.LICENSE.txt",revision:"5b8abc649cf29de3b5de419a078d8c6c"},{url:"./6.46825a530b614973eeca.js",revision:null},{url:"./7.e9f8de2dfbc6cb3709fe.js",revision:null},{url:"./8.a7b2f0dd76a59276b562.js",revision:null},{url:"./8.a7b2f0dd76a59276b562.js.LICENSE.txt",revision:"89123cce5ef7332db0f52238d5ccde29"},{url:"./9.6f16b0c6a2ac3db72ea2.js",revision:null},{url:"./favicon.ico",revision:"ac998ede0f8d84c3461f35ecd476c444"},{url:"./index.html",revision:"ede172c24a9835703b3bfc5642aa660f"},{url:"./javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;.1feff74faaf0efc6a044355c92cd15d9.bin",revision:null},{url:"./main.ab555d6b4581714f8458.js",revision:null},{url:"./runtime.523749d4413d6b56d963.js",revision:null},{url:"./style.650f7a3c4b0c1d84a223.css",revision:null}],{}),e.registerRoute(/.*\.(?:js|html|\/)$/,new e.NetworkFirst,"GET"),e.registerRoute(/.*\.(?:xml|json|md|css)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]}),"GET")}));
