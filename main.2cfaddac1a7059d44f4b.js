(Function("return this")().webpackChunk_masx200_markdown_reader=Function("return this")().webpackChunk_masx200_markdown_reader||[]).push([[0],[,function(t,e,n){"use strict";var r=n(48),i=n(2),a=n.n(i),c=n(26),o=(n(4),n(27)),u=n(5),s=n(22),l=n(23),f=n(25);var d=n(6),h=n(28),m=n(29),p=n(30),v=f.$.menulist;function b(){var t=(0,d.m)(),e=Reflect.get(t,"urltext");return v.findIndex((function(t){return t===e}))}function w(){var t=(0,d.m)();Reflect.set(t,"nextpagelink",p.o);var e=b();if(e>=0&&e<=v.length-1){var n=e+1;if(n>=0&&n<=v.length-1){var r=v[n];Reflect.set(t,"nextpagelink",String(Object.assign(new URL(location.href),{hash:r})))}}}function x(){var t=(0,d.m)();Reflect.set(t,"prevpagelink",p.o);var e=b();if(e>=0&&e<=v.length-1){var n=e-1;if(n>=0&&n<=v.length-1){var r=v[n];Reflect.set(t,"prevpagelink",String(Object.assign(new URL(location.href),{hash:r})))}}}var g=f.$.cachetitle;function y(){return(y=(0,c.Z)(a().mark((function t(){var e,n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.default.nextTick();case 2:return e=(0,d.m)(),(0,m.m)(),Reflect.set(e,"showsrc",!0),n=Reflect.get(e,"urltext"),r=g.get(n),document.title=r?r+" - "+h.Z.maintitle:h.Z.maintitle,(0,m.m)(),Reflect.set(e,"showerror",!1),t.next=12,o.default.nextTick();case 12:return w(),x(),t.next=16,o.default.nextTick();case 16:Array.from(document.querySelectorAll("a")).forEach((function(t){t.hash==="#"+n?t.classList.add("active"):t.classList.remove("active")}));case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var k=n(31),E=n(7),L=(0,E.D)((function(){var t=(0,d.m)();window.innerWidth<550&&Reflect.set(t,"xianshicebianlan",!1)}));function R(t){t.scrollIntoView({inline:"nearest",block:"nearest"})}s.t.addEventListener("load",(function(){return y.apply(this,arguments)})),s.t.addEventListener("load",(function(){(0,u.M)()})),s.t.addEventListener("mount",(function(){var t=setInterval((function(){(0,u.M)()}),30);setTimeout((function(){clearInterval(t)}),100)}),{once:!0}),s.t.addEventListener("load",(function(){var t=l.N.getparams();if(Reflect.has(t,"id")){var e=Reflect.get(t,"id");"top"===e?scrollTo(0,0):"bottom"===e?scrollTo(0,document.body.scrollHeight):function(t){var e=document.getElementById(t);e&&requestAnimationFrame((0,c.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.default.nextTick();case 2:requestAnimationFrame((function(){if(f.$.firstloaded>=1)e.scrollIntoView({inline:"center",block:"center"});else{var t=setInterval((function(){requestIdleCallback((function(){Array.from(document.querySelectorAll("*")).includes(e)&&(f.$.firstloaded++,e.scrollIntoView({inline:"center",block:"center"}))}))}),30);setTimeout((function(){clearInterval(t)}),100)}}));case 3:case"end":return t.stop()}}),t)}))))}(e)}else window.scrollTo(0,0)})),s.t.addEventListener("load",(function(){var t=(0,d.m)(),e=Reflect.get(t,"urltext");Array.from(t.getsidebarele().querySelectorAll("a")).forEach((function(t){t.hash==="#"+e&&requestAnimationFrame((0,c.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.default.nextTick();case 2:requestAnimationFrame((function(){requestIdleCallback((function(){R(t)}))}));case 3:case"end":return e.stop()}}),e)}))))}))})),s.t.addEventListener("mount",(function(){window.addEventListener("hashchange",k.M),window.addEventListener("resize",u.M)}),{once:!0}),s.t.addEventListener("mount",(function(){L()}),{once:!0}),s.t.addEventListener("load",(function(){L()}));var A=n(45);function S(t){var e=t.target;e&&requestIdleCallback((function(){var t=Reflect.get(e,"scrollIntoView");"function"===typeof t&&Reflect.apply(t,e,[{behavior:"smooth",inline:"center",block:"center"}])}))}var Z=(0,A.aZ)({setup:function(){return{container:(0,A.iH)()}},methods:{},props:["html"],watch:{html:function(t){var e=this;return(0,c.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.default.nextTick();case 2:requestAnimationFrame((function(){Array.from(e.container.getElementsByClassName("scrollIntoView")).forEach((function(t){t.onclick=S}))}));case 3:case"end":return t.stop()}}),t)})))()}}}),_=n(44),T=(0,_.Z)(Z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("div",{ref:"container",attrs:{id:"content-aa867a1d8c5dfbf2abbff8bc2af55a88a36"},domProps:{innerHTML:t._s(t.html)}})])}),[],!1,null,null,null).exports,q=(0,_.Z)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticStyle:{position:"fixed"}},[n("div",{attrs:{id:"loadingparent-b80f303d89182a8e58b02981c0822deb975"}},[n("div",{attrs:{id:"loading-36bec0d286ad9ab9ca8c1d923b0095c1c06"}},[n("h1",{staticClass:"mybigloading"},[t._v("Loading...")])])])])}],!1,null,null,null).exports,M=(0,A.aZ)({props:["href"],computed:{disabled:function(){return!this.enabled},enabled:function(){return this.href!==p.o}}}),I=(0,_.Z)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.enabled?n("a",{staticClass:"\n            mui-btn mui-btn-primary mui-btn-outlined\n            mybutton-8731e6c5bb5148e49e14cca7cdfa73e8\n        ",staticStyle:{height:"100%",width:"100%","line-height":"inherit"},attrs:{href:t.href}},[t._t("default")],2):t._e(),t._v(" "),t.disabled?n("button",{staticClass:"\n            mui-btn mui-btn-primary mui-btn-outlined\n            mybutton-8731e6c5bb5148e49e14cca7cdfa73e8\n        ",staticStyle:{height:"100%",width:"100%"},attrs:{type:"button"}},[t._t("default")],2):t._e()])}),[],!1,null,null,null).exports,C=(0,A.aZ)({props:["href"]}),H=(0,_.Z)(C,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{staticClass:"\n        navbar-brand navbar-brand\n        mui-btn mui-btn-primary mui-btn-outlined\n    ",staticStyle:{margin:"0",top:"0px"},attrs:{href:t.href}},[t._t("default")],2)}),[],!1,null,null,null).exports;var $=(0,A.aZ)({setup:function(){return{innerheight:function(){var t=(0,A.iH)(window.innerHeight),e=(0,E.D)((function(){requestAnimationFrame((function(){t.value=window.innerHeight}))}));return(0,A.bv)((function(){window.addEventListener("resize",e)})),(0,A.Ah)((function(){window.removeEventListener("resize",e)})),t}()}},computed:{maxheight:function(){var t=this.top,e=this.innerheight;return String(e-t.replaceAll("px",""))+"px"}},props:["html","top"]}),j=(0,_.Z)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"mysidebar",staticStyle:{position:"fixed",left:"0"}},[n("div",{staticClass:"container-fluid",staticStyle:{padding:"0"}},[n("div",{ref:"Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644",staticClass:"\n                el-container\n                mysidebarone\n                cebianlan-720feeaf8ee88a6b9b9399876713ed78af4\n            ",style:{"max-height":this.maxheight,top:this.top,left:"0"}},[n("div",{staticClass:"el-aside",staticStyle:{"margin-bottom":"5px","background-color":"white"},attrs:{id:"mynewsidelan-c887e2d697f11af869981691c9830ebd892"},domProps:{innerHTML:t._s(t.html)}})])])])}),[],!1,null,"7e2dfb22",null).exports,F=(0,A.aZ)({props:["onclick"]}),U={Bigloading:q,Articlemarkdown:T,Toggledisplayofsidebar:(0,_.Z)(F,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"mui-btn mui-btn-primary mui-btn-outlined",staticStyle:{display:"inline-block"},attrs:{type:"button"},on:{click:t.onclick}},[n("span",{staticClass:"navbar-toggler-icon"})])}),[],!1,null,null,null).exports,NavHomebutton:H,Disableablelinks:I,Sidebarleft:j},N=(n(46),n(47));function W(){return(W=(0,c.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(8).then(n.t.bind(n,52,23));case 2:e=t.sent,new(0,e.default)(".btn").on("success",(function(t){t.clearSelection()}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}"function"!==typeof requestIdleCallback&&n.n(N)()("https://polyfill.io/v3/polyfill.min.js?features=requestIdleCallback"),window.addEventListener("load",(function(){return W.apply(this,arguments)}),{once:!0}),(0,c.Z)(a().mark((function t(){var e,r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.getElementById("root")||document.body.appendChild(document.createElement("div")),Object.assign(e,{id:"root"}),t.next=4,n.e(7).then(n.bind(n,49));case 4:r=t.sent,i=r.mount,e&&i(e);case 7:case"end":return t.stop()}}),t)})))(),window.addEventListener("load",(function(){}),{once:!0}),Object.entries(U).forEach((function(t){var e=(0,r.Z)(t,2),n=e[0],i=e[1];o.default.component(n,i)}))},,,,function(t,e,n){"use strict";n.d(e,{M:function(){return i}});var r=n(6);var i=(0,n(7).D)((function(){return new Promise((function(t){requestAnimationFrame((function(){!function(){var t=(0,r.m)(),e=(0,r.m)().mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95.clientHeight;t.top=e+"px";var n=(0,r.m)().getsidebarele().clientWidth;t.widescreen?t.left=n+"px":t.left="0"}(),t()}))}))}))},function(t,e,n){"use strict";n.d(e,{w:function(){return r},m:function(){return i}});var r={value:void 0};function i(){if(r.value)return r.value;throw new Error("uninitalized")}},function(t,e,n){"use strict";n.d(e,{D:function(){return i.a}});var r=n(8),i=n.n(r)},,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,{t:function(){return r}});var r=new EventTarget},function(t,e,n){"use strict";n.d(e,{N:function(){return r}});var r=(0,n(24).cP)()},,function(t,e,n){"use strict";n.d(e,{$:function(){return r}});var r={firstloaded:0,cachemarkdown:new Map,cachetitle:new Map,menulist:[]}},,,function(t,e){"use strict";e.Z={maintitle:"markdown reader",homepage:"README.md",catalogue:"summary.md",baseurl:"https://cdn.jsdelivr.net/gh/masx200/markdown-reader/"}},function(t,e,n){"use strict";n.d(e,{b:function(){return i},m:function(){return a}});var r=n(6);function i(){var t=(0,r.m)();Reflect.set(t,"showload",!0)}function a(){var t=(0,r.m)();Reflect.set(t,"showload",!1)}},function(t,e,n){"use strict";n.d(e,{o:function(){return r}});var r="javascript:;"},function(t,e,n){"use strict";n.d(e,{M:function(){return A}});var r=n(40),i=n(2),a=n.n(i),c=n(26),o=n(27),u=n(6),s=n(33),l=n(32);function f(t,e){return d.apply(this,arguments)}function d(){return(d=(0,c.Z)(a().mark((function t(e,r){var i,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.$)(e,{baseUrl:r});case 2:return e=t.sent,(i=document.implementation.createHTMLDocument("")).body.innerHTML=e,(0,s.G)(i,r),t.next=8,Promise.all([n.e(10),n.e(11),n.e(12),n.e(9)]).then(n.bind(n,53));case 8:return c=t.sent.default,Array.from(i.body.querySelectorAll("pre code")).forEach((function(t){c.highlightElement(t)})),t.abrupt("return",i.body.innerHTML);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var h=function(t){var e=(0,u.m)();Reflect.set(e,"contenthtml",t)},m=n(7),p=n(29),v=n(22),b=n(34),w=n(43),x=n(23),g=n(39),y=n(35),k=n(25),E=n(37),L=k.$.cachemarkdown,R=k.$.cachetitle,A=(0,m.D)((0,c.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:return t.next=4,o.default.nextTick();case 4:requestAnimationFrame((function(){v.t.dispatchEvent(new Event("load"))}));case 5:case"end":return t.stop()}}),t)}))));function S(){return Z.apply(this,arguments)}function Z(){return(Z=(0,c.Z)(a().mark((function t(){var e,n,r,i,c,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=(0,u.m)(),(0,p.b)(),(n=(0,y.w)())===Reflect.get(e,"urltext")){t.next=48;break}if(!(r=L.get(n))){t.next=13;break}return h(r),Reflect.set(e,"urltext",n),(0,p.m)(),Reflect.set(e,"showsrc",!0),t.abrupt("return");case 13:return(0,p.b)(),t.prev=14,t.next=17,(0,b.Z)(n);case 17:return i=t.sent,c=document.createElement("div"),t.next=21,f(i,n);case 21:return c.innerHTML=t.sent,(0,g.E)(c),M(c),T(c,n),_(c,n),o=c.innerHTML,L.get(n)||L.set(n,o),(0,p.m)(),Reflect.set(e,"showsrc",!0),n==(0,y.w)()&&(h(o),Reflect.set(e,"urltext",n)),q(c,n),Reflect.set(e,"showerror",!1),t.abrupt("return");case 36:throw t.prev=36,t.t0=t.catch(14),Reflect.set(e,"errorcontent","\u52a0\u8f7d\u5931\u8d25 "+n),(0,p.m)(),Reflect.set(e,"showerror",!0),requestAnimationFrame((function(){setTimeout((function(){location.hash=""}),5e3)})),Reflect.set(e,"showsrc",!1),t.t0;case 46:t.next=50;break;case 48:return(0,p.m)(),t.abrupt("return");case 50:case"end":return t.stop()}}),t,null,[[14,36]])})))).apply(this,arguments)}function _(t,e){["h1","h2","h3","h4","h5","h6"].map((function(e){return Array.from(t.querySelectorAll(e))})).flat().forEach((function(t){var n=t.id,r=x.N.paramshref({md:e,id:n}),i=t.innerHTML;t.innerHTML="<a class='anchor scrollIntoView' href=".concat(r,"><span class='anchor-icon'></span>").concat(i,"</a>")}))}function T(t,e){Array.from(t.querySelectorAll("a")).forEach((function(t){var n=t.getAttribute("href"),i=new URL(location.href);if(null===n||void 0===n?void 0:n.endsWith(".md")){var a,c=String(new URL(n,e)),o=(0,E.N)(c);if(!new URL(o).pathname.endsWith(".md"))return;i.hash="#"+o,t.href=i.href,(a=t.classList).add.apply(a,(0,r.Z)("mui-btn mui-btn-primary mui-btn-outlined mybutton-8731e6c5bb5148e49e14cca7cdfa73e8".split(" ")))}}))}function q(t,e){var n=function(){for(var e=0,n=["h1","h2","h3","h4","h5","h6"];e<n.length;e++){var r,i=n[e],a=null===(r=t.querySelector(i))||void 0===r?void 0:r.innerText;if(a)return a}}();n&&!R.get(e)&&R.set(e,n)}function M(t){Array.from(t.querySelectorAll("pre")).forEach((function(t){t.classList.add("position-relative")})),Array.from(t.querySelectorAll("code.hljs")).forEach((function(t){var e="clip-"+(0,w.M)();t.setAttribute("id",e),t.insertAdjacentHTML("afterend",'<button class="btn btn-outline-primary clipbutton position-absolute right-0 top-0" data-clipboard-target="#'.concat(e,'">\u590d\u5236\n                                        </button>'))}))}},function(t,e,n){"use strict";n.d(e,{$:function(){return u}});var r=n(2),i=n.n(r),a=n(26);function c(t){return t.replace(/\\/g,"&#92;").replace(/\_/g,"&#95;")}function o(t){return t.replace(/&amp;#92;/g,"\\").replace(/&amp;#95;/g,"_")}function u(t){return s.apply(this,arguments)}function s(){return(s=(0,a.Z)(i().mark((function t(e){var r,a,u,s=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},t.next=3,n.e(13).then(n.t.bind(n,86,23));case 3:return a=t.sent,u=a.default,e=o(e=u(c(e),r)),t.abrupt("return",e);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},function(t,e,n){"use strict";function r(t,e){Array.from(t.body.querySelectorAll("img")).forEach((function(t){t.loading="lazy";var n=t.getAttribute("src");if(n&&!n.startsWith("http://")&&!n.startsWith("https://")){var r=String(new URL(n,e));t.src=r}}))}n.d(e,{G:function(){return r}})},function(t,e,n){"use strict";var r=n(2),i=n.n(r),a=n(26),c=function(){var t=(0,a.Z)(i().mark((function t(e){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if((r=t.sent).ok){t.next=7;break}throw new Error("fetch failed:status:"+r.status+"\n"+e);case 7:if(null===(n=r.headers.get("content-type"))||void 0===n?void 0:n.startsWith("text/markdown")){t.next=11;break}throw new Error("fetch failed:content-type:"+r.headers.get("content-type")+"\n"+e);case 11:return t.abrupt("return",r.text());case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.Z=c},function(t,e,n){"use strict";n.d(e,{w:function(){return o}});var r=n(36),i=n(38),a=n(37),c=n(23);function o(){var t,e=(0,r.eu)(),n=c.N.getparams();return t=(t=Reflect.has(n,"md")?Reflect.get(n,"md"):""===location.hash||"#"===location.hash?(0,r.ID)():location.hash.replace("#","")).endsWith(".md")?t:t+".md",(0,i.G)(t)&&(t=new URL(t,e).toString()),t=(0,a.N)(t),t=(0,r.wM)(t)}},function(t,e,n){"use strict";n.d(e,{eu:function(){return a},ID:function(){return c},oq:function(){return o},wM:function(){return u}});var r=n(28),i=n(37);function a(){return r.Z.baseurl}function c(){return u((0,i.N)(String(new URL(r.Z.homepage,r.Z.baseurl))))}function o(){return u((0,i.N)(String(new URL(r.Z.catalogue,r.Z.baseurl))))}function u(t){var e=new URL(t);return e.pathname.endsWith(".md")||(e.pathname=e.pathname+".md"),String(e)}},function(t,e,n){"use strict";function r(t){var e=new URL(t);return e.hash="",e.href.split("#")[0]}n.d(e,{N:function(){return r}})},function(t,e,n){"use strict";function r(t){return!t.startsWith("http://")&&!t.startsWith("https://")}n.d(e,{G:function(){return r}})},function(t,e,n){"use strict";function r(t){["link","style","script","title","meta"].map((function(e){return Array.from(t.querySelectorAll(e))})).flat().forEach((function(t){t.remove()}))}n.d(e,{E:function(){return r}})},,,,function(t,e,n){"use strict";function r(){return"xxxxxxxxyxxxxyxxxyyxxxyxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}n.d(e,{M:function(){return r}})},,,function(){"use strict";window.addEventListener("error",(function(t){var e=t.error;alert([String(t),String(e),t.message,t.filename,null===e||void 0===e?void 0:e.stack].join("\n"))})),window.addEventListener("unhandledrejection",(function(t){var e=t.reason;alert([String(t),String(e),null===e||void 0===e?void 0:e.stack].join("\n"))}))},function(t){t.exports=function(t){var e=new XMLHttpRequest;e.open("GET",t,!1),e.send(null);var n=e.responseText;new Function(n)()}}],function(t){"use strict";var e=function(e){return t(t.s=e)};t.O(0,[2,4,3,6,5],(function(){return e(0),e(1)}));t.O()}]);