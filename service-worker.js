if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,l)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}}))).then((e=>{const r=l(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-7027d4db"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./10.bcce367fce743c3069cd.js",revision:null},{url:"./11.bac9599bd3783e8713ee.js",revision:null},{url:"./12.94f45bc917fc1e64d77a.js",revision:null},{url:"./13.4dd9f476ce078e04c8da.js",revision:null},{url:"./14.08f68da9ac7902a0bf8c.js",revision:null},{url:"./14.7fbbe7a0fed93b4627c2.css",revision:null},{url:"./15.79788a310d6acc4f6476.js",revision:null},{url:"./3.475e1fd8d7bbd5b80b63.js",revision:null},{url:"./4.f94551792a0214440dfe.js",revision:null},{url:"./5.24474b05ee41934e10bb.js",revision:null},{url:"./5.24474b05ee41934e10bb.js.LICENSE.txt",revision:"5b8abc649cf29de3b5de419a078d8c6c"},{url:"./6.061905b8048bf48eaa0c.js",revision:null},{url:"./7.36d87da95a8cfd5a893e.js",revision:null},{url:"./8.2af4e9f1f66af40e73e6.js",revision:null},{url:"./8.2af4e9f1f66af40e73e6.js.LICENSE.txt",revision:"89123cce5ef7332db0f52238d5ccde29"},{url:"./9.eb70e74e73097521d0cc.js",revision:null},{url:"./favicon.ico",revision:"ac998ede0f8d84c3461f35ecd476c444"},{url:"./index.html",revision:"c01f6a16fdd4d00978b56b82a64055e1"},{url:"./javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;.1feff74faaf0efc6a044355c92cd15d9.bin",revision:null},{url:"./main.1acfb789517f5f3fd91d.js",revision:null},{url:"./main.ad6ff9444d0ba4437b73.css",revision:null},{url:"./runtime.dea3fb80b2d396fba791.js",revision:null},{url:"./style.9c6ad35ef144cd8525ed.css",revision:null}],{}),e.registerRoute(/.*\.(?:js|html|\/)$/,new e.NetworkFirst,"GET"),e.registerRoute(/.*\.(?:xml|json|md|css)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]}),"GET")}));
