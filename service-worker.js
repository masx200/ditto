if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const l={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return l;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-7027d4db"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./10.eb51f8efeabf27e51742.js",revision:null},{url:"./11.53afb352eb34d45a2ee5.js",revision:null},{url:"./2.54129ffc982e4f3d03a3.js",revision:null},{url:"./3.9ea35d35603fbca7ba7d.js",revision:null},{url:"./3.9ea35d35603fbca7ba7d.js.LICENSE.txt",revision:"5b8abc649cf29de3b5de419a078d8c6c"},{url:"./4.2e4c522eb5b891a9c388.js",revision:null},{url:"./5.2a08256f096a5ea87e31.js",revision:null},{url:"./6.523053b2b50307cd97fa.js",revision:null},{url:"./7.a7ebe2a3d5c41f273564.js",revision:null},{url:"./8.13103db45a7e0afc9857.js",revision:null},{url:"./9.cfbae5f47d83f503421a.js",revision:null},{url:"./9.cfbae5f47d83f503421a.js.LICENSE.txt",revision:"89123cce5ef7332db0f52238d5ccde29"},{url:"./favicon.ico",revision:"ac998ede0f8d84c3461f35ecd476c444"},{url:"./index.html",revision:"c6300959da5684dc4cd58ba0aef1dab5"},{url:"./javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;.1feff74faaf0efc6a044355c92cd15d9.bin",revision:null},{url:"./main.37e21658dfd344ebc546.css",revision:null},{url:"./main.571527f861379373eb28.js",revision:null},{url:"./runtime.b88e98cf906fcdca2443.js",revision:null}],{}),e.registerRoute(/.*\.(?:js|html|\/)$/,new e.NetworkFirst,"GET"),e.registerRoute(/.*\.(?:xml|json|md|css)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]}),"GET")}));
