(Function("return this")().webpackChunk_masx200_markdown_reader=Function("return this")().webpackChunk_masx200_markdown_reader||[]).push([[5,4],[,,,,,,,,function(t,e,n){"use strict";n.r(e),e.default={maintitle:"markdown reader",homepage:"README.md",catalogue:"summary.md",baseurl:"https://cdn.jsdelivr.net/gh/masx200/markdown-reader/"}},function(t,e,n){"use strict";n.r(e),n.d(e,{mount:function(){return r.LI}});var r=n(10)},function(t,e,n){"use strict";n.d(e,{El:function(){return _},I:function(){return x},LI:function(){return k}});var r=n(5),a=n(12),i=n(11),o=(0,a.D)((function(){return new Promise((function(t){requestAnimationFrame((function(){!function(){var t=i.sE.value.clientHeight+"px";i.TN.value.style.top=t}(),function(){var t=i.sE.value.clientHeight+"px";i.Pi.value.style["margin-top"]=t}(),t()}))}))}));var c=n(1),s=n.n(c),u=n(7),d=n(6),l=n(13),f=n(14);function b(){var t=Reflect.get(_,"urltext");return f.i.findIndex((function(e){return e===t}))}var m=(0,d.aZ)({setup:function(t,e){e.attrs,e.slots,e.emit;var n={contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1:i.wH,mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95:i.sE,mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3:i.Pi,Directorycontent_4dd4b8ef845d1a0de9b7e29b0e9bd1be517:i.Z9,markdowncontent_2e4c728cac441a0c48939881c2c714361a0:i.ko,Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644:i.TN};return(0,d.bv)((function(){})),n},mounted:function(){(0,u.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(10).then(n.bind(n,60));case 2:e=t.sent,(0,e.mymounted)();case 5:case"end":return t.stop()}}),t)})))()},computed:{indexhref:function(){return String(Object.assign(new URL(location.href),{hash:(0,l.ID)()}))},muluhtml:{get:function(){return i.Z9.value.innerHTML},set:function(t){i.Z9.value.innerHTML=t}}},data:function(){return{mytitle:"Markdown Reader",showerror:!1,errorcontent:"",showsrc:!1,urltext:"",xianshicebianlan:!0,showload:!0}},methods:{togglecebian:function(){this.xianshicebianlan=!this.xianshicebianlan},scrolltotop:function(){scrollTo(0,0)},scrolltobottom:function(){scrollTo(0,document.body.scrollHeight)},toprevpage:function(){var t=b();if(t>=0&&t<=f.i.length-1){var e=t-1;e>=0&&e<=f.i.length-1&&(location.hash=f.i[e])}},tonextpage:function(){var t=b();if(t>=0&&t<=f.i.length-1){var e=t+1;e>=0&&e<=f.i.length-1&&(location.hash=f.i[e])}}}}),p=(0,n(15).Z)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95",staticClass:"container-fluid fixed-top",staticStyle:{"padding-right":"0","padding-left":"0"},attrs:{id:"mynavigationbar-dceff036a563faf668b4d4a50fd702d1d95"}},[n("nav",{staticClass:"navbar navbar-expand-sm bg-light navbar-light",staticStyle:{"padding-right":"0","padding-left":"0"}},[n("div",{staticStyle:{display:"flex",width:"100%","justify-content":"space-between","flex-direction":"row","align-items":"stretch"},attrs:{id:"nav-6fc6d0bc9128ba5f98a1e493cb2adf11550"}},[n("a",{staticClass:"\n                        navbar-brand navbar-brand\n                        mui-btn mui-btn-primary mui-btn-outlined\n                    ",staticStyle:{margin:"0",top:"0px"},attrs:{href:t.indexhref},domProps:{textContent:t._s(t.mytitle)}},[t._v("Markdown Reader")]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-primary mui-btn-outlined",staticStyle:{display:"inline-block"},attrs:{type:"button"},on:{click:t.togglecebian}},[n("span",{staticClass:"navbar-toggler-icon"})])]),t._v(" "),n("div",{staticStyle:{display:"flex",width:"100%","justify-content":"space-between","flex-direction":"row","align-items":"stretch"},attrs:{id:"nav-7e7dd758bdb27a9c889a4eaa0fce55cf2d7"}},[n("button",{staticClass:"mui-btn mui-btn-primary mui-btn-outlined mybutton-8731e6c5bb5148e49e14cca7cdfa73e8",attrs:{type:"button"},on:{click:t.scrolltotop}},[t._v("\n                    \u9876\u90e8\n                ")]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-primary mui-btn-outlined mybutton-8731e6c5bb5148e49e14cca7cdfa73e8",attrs:{type:"button"},on:{click:t.scrolltobottom}},[t._v("\n                    \u5e95\u90e8\n                ")]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-primary mui-btn-outlined mybutton-8731e6c5bb5148e49e14cca7cdfa73e8",attrs:{type:"button"},on:{click:t.toprevpage}},[t._v("\n                    \u524d\u9875\n                ")]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-primary mui-btn-outlined mybutton-8731e6c5bb5148e49e14cca7cdfa73e8",attrs:{type:"button"},on:{click:t.tonextpage}},[t._v("\n                    \u540e\u9875\n                ")])]),t._v(" "),n("div",{staticStyle:{display:"flex",width:"100%","justify-content":"space-between","flex-direction":"row","align-items":"stretch"},attrs:{id:"nav-3fa9878ebc0dbb05688f058e3bcafc57386"}},[n("a",{staticClass:"\n                        navbar-brand navbar-brand\n                        mui-btn mui-btn-primary mui-btn-outlined\n                    ",staticStyle:{margin:"0",top:"0px"},attrs:{href:t.indexhref},domProps:{textContent:t._s(t.mytitle)}},[t._v("Markdown Reader")]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-primary mui-btn-outlined",staticStyle:{display:"inline-block"},attrs:{type:"button"},on:{click:t.togglecebian}},[n("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-primary mui-btn-outlined mybutton-8731e6c5bb5148e49e14cca7cdfa73e8",attrs:{type:"button"},on:{click:t.scrolltotop}},[t._v("\n                    \u9876\u90e8\n                ")]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-primary mui-btn-outlined mybutton-8731e6c5bb5148e49e14cca7cdfa73e8",attrs:{type:"button"},on:{click:t.scrolltobottom}},[t._v("\n                    \u5e95\u90e8\n                ")]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-primary mui-btn-outlined mybutton-8731e6c5bb5148e49e14cca7cdfa73e8",attrs:{type:"button"},on:{click:t.toprevpage}},[t._v("\n                    \u524d\u9875\n                ")]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-primary mui-btn-outlined mybutton-8731e6c5bb5148e49e14cca7cdfa73e8",attrs:{type:"button"},on:{click:t.tonextpage}},[t._v("\n                    \u540e\u9875\n                ")])])])]),t._v(" "),n("div",{staticClass:"container-fluid"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.xianshicebianlan,expression:"xianshicebianlan"}],ref:"Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644",staticClass:"el-container",staticStyle:{border:"1px solid white",position:"fixed"},attrs:{id:"cebianlan-720feeaf8ee88a6b9b9399876713ed78af4"}},[n("aside",{ref:"Directorycontent_4dd4b8ef845d1a0de9b7e29b0e9bd1be517",staticClass:"el-aside",staticStyle:{"background-color":"white"},attrs:{id:"mynewsidelan-c887e2d697f11af869981691c9830ebd892"}})])]),t._v(" "),n("div",{ref:"mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3",staticClass:"container",attrs:{id:"mybody-143af32b9b8f396b798aeb8d4ee68ed9ca3"}},[n("div",{attrs:{id:"loadingparent-b80f303d89182a8e58b02981c0822deb975"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showload,expression:"showload"}],attrs:{id:"loading-36bec0d286ad9ab9ca8c1d923b0095c1c06"}},[n("h1",[t._v("Loading ...")])])]),t._v(" "),n("div",[n("div",{ref:"contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1",staticStyle:{"margin-left":"20px"},attrs:{id:"contentcontainer-9ce8d13b9be97b46e89aeea8f242169cfa1"}},[n("h5",{directives:[{name:"show",rawName:"v-show",value:t.showsrc,expression:"showsrc"}],attrs:{id:"markdownurlsrc-63228f01b0737ac6a8b1c08af92dec0eb11"},domProps:{textContent:t._s(t.urltext)}}),t._v(" "),n("h5",{directives:[{name:"show",rawName:"v-show",value:t.showerror,expression:"showerror"}],attrs:{id:"markdownerror-4c6b19f7b26c2b519b8ff480769b5565d6b"},domProps:{textContent:t._s(t.errorcontent)}}),t._v(" "),n("div",{ref:"markdowncontent_2e4c728cac441a0c48939881c2c714361a0",attrs:{id:"content-aa867a1d8c5dfbf2abbff8bc2af55a88a36"}})])])])])}),[],!1,null,null,null).exports,h=n(8),v=(n(4),n(57)),g=(n(16),n(17)),y=(0,a.D)((function(){return new Promise((function(t){requestAnimationFrame((function(){if(window.innerWidth>550){var e=i.TN.value.offsetWidth+"px";i.wH.value.style["padding-left"]=e}else i.wH.value.style["padding-left"]=0;t()}))}))})),w=(0,a.D)((function(){window.innerWidth<550&&Reflect.set(_,"xianshicebianlan",!1)}));window.addEventListener("resize",o),window.addEventListener("resize",y);var x="first-"+(0,v.M)();r.default.config.devtools=!0,r.default.config.productionTip=!1,r.default.config.silent=!0,r.default.config.errorHandler=function(t,e,n){throw t};var _=new r.default(p);function k(t){var e=Object.fromEntries(new URL(location.href).searchParams);Object.keys(h.default).forEach((function(t){var n=e[t];n&&Reflect.set(h.default,t,n)})),h.default.baseurl=String(new URL(h.default.baseurl,location.href)),t.innerHTML="<div id=".concat(x,'>\n<h1>loading</h1>\n<span class="mui-spinner mui-spinner-custom">\n\n</span></div>\n'),_.$mount(t.appendChild(document.createElement("div")))}window.addEventListener("hashchange",g.M),window.addEventListener("hashchange",w)},function(t,e,n){"use strict";n.d(e,{TN:function(){return a},ko:function(){return i},Z9:function(){return o},Pi:function(){return c},sE:function(){return s},wH:function(){return u}});var r=n(6),a=(0,r.iH)(),i=(0,r.iH)(),o=(0,r.iH)(),c=(0,r.iH)(),s=(0,r.iH)(),u=(0,r.iH)()},function(t,e,n){"use strict";function r(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];clearTimeout(e),e=setTimeout((function(){Reflect.apply(t,null,a)}),n)}}n.d(e,{D:function(){return r}})},function(t,e,n){"use strict";n.d(e,{eu:function(){return a},ID:function(){return i},oq:function(){return o}});var r=n(8);function a(){return r.default.baseurl}function i(){return String(new URL(r.default.homepage,r.default.baseurl))}function o(){return String(new URL(r.default.catalogue,r.default.baseurl))}},function(t,e,n){"use strict";n.d(e,{i:function(){return r}});var r=[]},,function(){window.NodeList&&!NodeList.prototype.forEach&&Reflect.set(NodeList.prototype,"forEach",Array.prototype.forEach)},function(t,e,n){"use strict";n.d(e,{M:function(){return _}});var r=n(1),a=n.n(r),i=n(58),o=n(7),c=n(18),s=n(19);function u(t,e){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)(a().mark((function t(e,n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.$)(e);case 2:return e=t.sent,(r=document.implementation.createHTMLDocument("title")).body.innerHTML=e,Array.from(r.body.querySelectorAll("img")).forEach((function(t){var e=t.getAttribute("src");if(e&&!e.startsWith("http://")&&!e.startsWith("https://")){var r=String(new URL(e,n));t.src=r}})),Array.from(r.body.querySelectorAll("pre code")).forEach((function(t){s.Z.highlightElement(t)})),t.abrupt("return",r.body.innerHTML);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var l=n(11),f=function(){return l.ko.value.innerHTML},b=function(t){l.ko.value.innerHTML=t},m=n(12),p=n(52),h=n(54),v=n(13),g=n(57),y=n(55),w=n(10),x=n(56),_=(0,m.D)((0,o.Z)(a().mark((function t(){var e,n,r,o,c,s,d;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=(0,v.eu)(),window.scrollTo(0,0),n=(n=""===location.hash||"#"===location.hash?(0,v.ID)():location.hash.replace("#","")).endsWith(".md")?n:n+".md",(0,y.G)(n)&&(n=new URL(n,e).toString()),(n=(0,x.N)(n))===Reflect.get(w.El,"urltext")){t.next=50;break}if(Reflect.set(w.El,"urltext",n),!(r=p.cachemarkdown.get(n))){t.next=16;break}return b(r),(0,p.stop_loading)(),Reflect.set(w.El,"showsrc",!0),t.abrupt("return");case 16:return(0,p.show_loading)(),t.prev=17,t.next=20,(0,h.Z)(n);case 20:return o=t.sent,c=document.createElement("div"),t.next=24,u(o,n);case 24:return c.innerHTML=t.sent,Array.from(c.querySelectorAll("code.hljs")).forEach((function(t){var e="clip"+(0,g.M)();t.setAttribute("id",e),t.insertAdjacentHTML("afterend",'<button class="btn btn-outline-primary clipbutton" data-clipboard-target="#'.concat(e,'">\u590d\u5236\n                                        </button>'))})),Array.from(c.querySelectorAll("a")).forEach((function(t){var e=t.getAttribute("href"),n=new URL(location.href);if(null===e||void 0===e?void 0:e.endsWith(".md")){var r,a=new URL(e,Reflect.get(w.El,"urltext"));n.hash="#"+a,t.href=n.href,(r=t.classList).add.apply(r,(0,i.Z)("mui-btn mui-btn-primary mui-btn-outlined".split(" ")))}})),b(c.innerHTML),s=f(),p.cachemarkdown.get(n)||p.cachemarkdown.set(n,s),(d=document.getElementById(w.I))&&(d.style.display="none"),window.scrollTo(0,0),(0,p.stop_loading)(),Reflect.set(w.El,"showsrc",!0),t.abrupt("return");case 40:throw t.prev=40,t.t0=t.catch(17),Reflect.set(w.El,"urltext","\u52a0\u8f7d\u5931\u8d25 "+n),(0,p.stop_loading)(),requestAnimationFrame((function(){location.hash=""})),Reflect.set(w.El,"showsrc",!0),t.t0;case 50:case"end":return t.stop()}}),t,null,[[17,40]])}))))},function(t,e,n){"use strict";n.d(e,{$:function(){return s}});var r=n(1),a=n.n(r),i=n(7);function o(t){return t.replace(/\\/g,"&#92;").replace(/\_/g,"&#95;")}function c(t){return t.replace(/&amp;#92;/g,"\\").replace(/&amp;#95;/g,"_")}function s(t){return u.apply(this,arguments)}function u(){return(u=(0,i.Z)(a().mark((function t(e){var r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(11).then(n.t.bind(n,61,23));case 2:return r=t.sent,i=r.default,e=c(e=i(o(e))),t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},function(t,e,n){"use strict";var r=n(51),a=n(20),i=n(21),o=n(22),c=n(47),s=n(49),u=n(23),d=n(50),l=n(24),f=n(48),b=n(25),m=n.n(b);e.Z=m(),m().registerLanguage("javascript",o.Z),m().registerLanguage("typescript",l.Z),m().registerLanguage("json",c.Z),m().registerLanguage("xml",f.Z),m().registerLanguage("css",a.Z),m().registerLanguage("powershell",s.Z),m().registerLanguage("shell",d.Z),m().registerLanguage("c",r.Z),m().registerLanguage("java",i.Z),m().registerLanguage("python",u.Z)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e),n.d(e,{cachemarkdown:function(){return o},show_loading:function(){return s},stop_loading:function(){return u}});var r=n(53),a=n(8),i=n(10),o=new Map,c=(0,r.Z)({},a.default);function s(){Reflect.set(i.El,"showload",!0)}function u(){Reflect.set(i.El,"showload",!1)}e.default=c},,function(t,e,n){"use strict";var r=n(1),a=n.n(r),i=n(7),o=function(){var t=(0,i.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if((r=t.sent).ok){t.next=7;break}throw new Error("fetch failed:status:"+r.status+"\n"+e);case 7:if(null===(n=r.headers.get("content-type"))||void 0===n?void 0:n.startsWith("text/markdown")){t.next=11;break}throw new Error("fetch failed:content-type:"+r.headers.get("content-type")+"\n"+e);case 11:return t.abrupt("return",r.text());case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.Z=o},function(t,e,n){"use strict";function r(t){return!t.startsWith("http://")&&!t.startsWith("https://")}n.d(e,{G:function(){return r}})},function(t,e,n){"use strict";function r(t){var e=new URL(t);return e.hash="",(t=e.href).split("#")[0]}n.d(e,{N:function(){return r}})},function(t,e,n){"use strict";function r(){return"xxxxxxxxyxxxxyxxxyyxxxyxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}n.d(e,{M:function(){return r}})}]]);