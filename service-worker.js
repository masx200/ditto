if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return c;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-7027d4db"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./10.2841d6df1a4692966321.js",revision:null},{url:"./11.198428e886b79477138d.js",revision:null},{url:"./2.82652b754d344004c5c8.js",revision:null},{url:"./3.9ea35d35603fbca7ba7d.js",revision:null},{url:"./3.9ea35d35603fbca7ba7d.js.LICENSE.txt",revision:"5b8abc649cf29de3b5de419a078d8c6c"},{url:"./4.2e4c522eb5b891a9c388.js",revision:null},{url:"./5.a6d2a12473fd84717030.js",revision:null},{url:"./6.7a9accc731d52a5457be.js",revision:null},{url:"./7.a65db299348050a0ecbd.js",revision:null},{url:"./8.09d863160be6a165adad.js",revision:null},{url:"./9.cfe1a36d5fb8da94e685.js",revision:null},{url:"./9.cfe1a36d5fb8da94e685.js.LICENSE.txt",revision:"89123cce5ef7332db0f52238d5ccde29"},{url:"./favicon.ico",revision:"ac998ede0f8d84c3461f35ecd476c444"},{url:"./index.html",revision:"caab8909f4ac8eb0c7321a8af81d6962"},{url:"./javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;.1feff74faaf0efc6a044355c92cd15d9.bin",revision:null},{url:"./main.60f55ce4998117d0ebbd.js",revision:null},{url:"./main.fd984cb4cccde416fbf8.css",revision:null},{url:"./runtime.74b9dabccec3aec85fb1.js",revision:null}],{}),e.registerRoute(/.*\.(?:js|html|\/)$/,new e.NetworkFirst,"GET"),e.registerRoute(/.*\.(?:xml|json|md|css)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]}),"GET")}));
