if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return c;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-7027d4db"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./10.aa1c0a859e5705673832.js",revision:null},{url:"./11.92c4dc410fab1c795b16.js",revision:null},{url:"./2.82652b754d344004c5c8.js",revision:null},{url:"./3.9ea35d35603fbca7ba7d.js",revision:null},{url:"./3.9ea35d35603fbca7ba7d.js.LICENSE.txt",revision:"5b8abc649cf29de3b5de419a078d8c6c"},{url:"./4.2e4c522eb5b891a9c388.js",revision:null},{url:"./5.ca97b991462a92fc5728.js",revision:null},{url:"./6.7b96c1399aec5d7a65db.js",revision:null},{url:"./7.4b67f14439f8047ea85d.js",revision:null},{url:"./8.101800dd12db3b4c12e0.js",revision:null},{url:"./9.f556dad9b4d08ffe0da3.js",revision:null},{url:"./9.f556dad9b4d08ffe0da3.js.LICENSE.txt",revision:"89123cce5ef7332db0f52238d5ccde29"},{url:"./favicon.ico",revision:"ac998ede0f8d84c3461f35ecd476c444"},{url:"./index.html",revision:"3ef0fed7c622a4bdb77221498d54f2b1"},{url:"./javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;.1feff74faaf0efc6a044355c92cd15d9.bin",revision:null},{url:"./main.097efe88a5fc9fe457b7.css",revision:null},{url:"./main.177e9469206f494254ac.js",revision:null},{url:"./runtime.07aa8e33cc021b3410a8.js",revision:null}],{}),e.registerRoute(/.*\.(?:js|html|\/)$/,new e.NetworkFirst,"GET"),e.registerRoute(/.*\.(?:xml|json|md|css)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]}),"GET")}));