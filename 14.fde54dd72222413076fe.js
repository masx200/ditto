(Function("return this")().webpackChunk_masx200_markdown_reader=Function("return this")().webpackChunk_masx200_markdown_reader||[]).push([[14],{87:function(e,t,n){"use strict";n.r(t),n.d(t,{mymounted:function(){return D}});var r=n(2),a=n.n(r),c=n(26),u=n(5),i=n(6),o=n(46),s=n(42),f=n(28),l=n(27),d=n(22),h=n(36),p=n(40),m=n(33),b=n(29),y=n(32),v=n(34),w=n(38);function x(e){return k.apply(this,arguments)}function k(){return(k=(0,c.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{credentials:"omit",method:"HEAD",mode:"cors"});case 2:if((r=e.sent).ok){e.next=7;break}throw new Error("fetch failed:status:"+r.status+"\n"+t);case 7:if(null===(n=r.headers.get("content-type"))||void 0===n?void 0:n.startsWith("text/markdown")){e.next=11;break}throw new Error("fetch failed:content-type:"+r.headers.get("content-type")+"\n"+t);case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=n(39),A=n(25),g=n(37),L=A.$.cachemarkdown,M=A.$.cachetitle,q=A.$.menulist;function R(){return Z.apply(this,arguments)}function Z(){return(Z=(0,c.Z)(a().mark((function e(){var t,r,c,u,o,s,f,l,d,p,w;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,i.m)(),r=(0,h.oq)(),c=r,c=(0,g.N)(c),q.unshift(c),e.prev=5,(0,b.b)(),e.next=9,(0,v.Z)(c);case 9:return u=e.sent,e.next=12,(0,y.$)(u,{baseUrl:c});case 12:return o=e.sent,(s=document.implementation.createHTMLDocument("")).body.innerHTML=o,(0,m.G)(s,r),(f=document.createElement("div")).innerHTML=s.body.innerHTML,(0,E.E)(f),e.next=21,Promise.all([n.e(9),n.e(10),n.e(11),n.e(8)]).then(n.bind(n,52));case 21:return l=e.sent.default,Array.from(f.querySelectorAll("pre code")).forEach((function(e){l.highlightElement(e)})),d=(0,h.ID)(),q.unshift(d),_(r,d,f),S(f),T(f,r),H(f),Reflect.set(t,"showerror",!1),p=f.innerHTML,Reflect.set(t,"muluhtml",p),L.get(c)||L.set(c,p),w=new Set(q),q.length=0,w.forEach((function(e){q.push(e)})),q.forEach((function(e){x(e)})),e.abrupt("return");case 40:throw e.prev=40,e.t0=e.catch(5),(0,b.m)(),Reflect.set(t,"errorcontent","\u52a0\u8f7d\u5931\u8d25 "+c),Reflect.set(t,"showerror",!0),Reflect.set(t,"showsrc",!1),e.t0;case 48:case"end":return e.stop()}}),e,null,[[5,40]])})))).apply(this,arguments)}function S(e){Array.from(e.querySelectorAll("ul")).forEach((function(e){return e.classList.add("navbar-nav")})),Array.from(e.querySelectorAll("a")).forEach((function(e){var t;return(t=e.classList).add.apply(t,(0,p.Z)("mui-btn mui-btn-primary mui-btn-outlined mybutton-8731e6c5bb5148e49e14cca7cdfa73e8".split(" ")))}))}function T(e,t){Array.from(e.querySelectorAll("a")).forEach((function(e){var n=e.getAttribute("href"),r=new URL(location.href);if(null===n||void 0===n?void 0:n.endsWith(".md")){var a,c=(0,w.G)(n)?new URL(n,t):n,u=(0,g.N)(c),i=u=u.endsWith(".md")?u:u+".md";if(!new URL(i).pathname.endsWith(".md"))return;q.push(i);var o=e.innerText;o&&!M.get(i)&&M.set(i,o),r.hash="#"+i,e.href=r.href,(a=e.classList).add.apply(a,(0,p.Z)("mui-btn mui-btn-primary mui-btn-outlined mybutton-8731e6c5bb5148e49e14cca7cdfa73e8".split(" ")))}}))}function _(e,t,n){[{u:e,d:"\u76ee\u5f55"},{u:t,d:"\u4e3b\u9875"}].forEach((function(e){var t=e.u,r=e.d,a='<a href="'.concat(t,'" class="mui-btn mui-btn-primary mui-btn-outlined">').concat(r,"</a><br/>");n.insertAdjacentHTML("afterbegin",a)}))}function H(e){new Set(Array.from(e.querySelectorAll("a")).map((function(e){return e.href}))).forEach((function(t){e.querySelectorAll('a[href="'.concat(t,'"]')).forEach((function(e,t){if(t>0){var n=e.parentNode;if(e.remove(),n&&!n.childNodes.length){var r=Reflect.get(n,"remove");"function"===typeof r&&Reflect.apply(r,n,[])}}}))}))}var I=n(35),N=n(31);function U(){return W.apply(this,arguments)}function W(){return(W=(0,c.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=(0,h.oq)(),n=(0,I.w)(),!Object.is(n,t)){e.next=9;break}return e.next=5,R();case 5:return e.next=7,(0,N.M)();case 7:e.next=11;break;case 9:return e.next=11,Promise.all([R(),(0,N.M)()]);case 11:return e.next=13,l.default.nextTick();case 13:requestAnimationFrame((function(){requestIdleCallback((function(){d.t.dispatchEvent(new Event("load"))}))}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){return C.apply(this,arguments)}function C(){return(C=(0,c.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.Z.maintitle,document.title=t,e.abrupt("return",U());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return F.apply(this,arguments)}function F(){return(F=(0,c.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(),e.next=3,$();case 3:(t=document.getElementById(o.I))&&(t.style.display="none");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){var e=new MutationObserver((function(){(0,u.M)(),(0,s.M)()})),t=(0,i.m)(),n={attributeOldValue:!0,subtree:!0,childList:!0,attributes:!0};[t.mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95,t.Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644].forEach((function(t){e.observe(t,n)}))}}}]);