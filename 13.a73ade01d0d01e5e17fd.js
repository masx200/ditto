(Function("return this")().webpackChunk_masx200_markdown_reader=Function("return this")().webpackChunk_masx200_markdown_reader||[]).push([[13],{85:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return $}});var a=n(2),i=n.n(a),r=n(26),s=n(47),o=n(6),c=n(46),l=n(28),d=n(30),b=(0,s.aZ)({props:["href"],computed:{disabled:function(){return!this.enabled},enabled:function(){return this.href!==d.o}}}),u=n(48),f=(0,u.Z)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.enabled?n("a",{staticClass:"\n            mui-btn mui-btn-primary mui-btn-outlined\n            mybutton-8731e6c5bb5148e49e14cca7cdfa73e8\n        ",staticStyle:{height:"100%",width:"100%","line-height":"inherit"},attrs:{href:t.href}},[t._t("default")],2):t._e(),t._v(" "),t.disabled?n("button",{staticClass:"\n            mui-btn mui-btn-primary mui-btn-outlined\n            mybutton-8731e6c5bb5148e49e14cca7cdfa73e8\n        ",staticStyle:{height:"100%",width:"100%"},attrs:{type:"button"}},[t._t("default")],2):t._e()])}),[],!1,null,null,null).exports,m=n(22),h=n(36),v=(0,s.aZ)({props:["title","href"]}),p=(0,u.Z)(v,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{staticClass:"\n        navbar-brand navbar-brand\n        mui-btn mui-btn-primary mui-btn-outlined\n    ",staticStyle:{margin:"0",top:"0px"},attrs:{href:t.href},domProps:{textContent:t._s(t.title)}},[t._v("Markdown Reader")])}),[],!1,null,null,null).exports,w=n(23),y=n(35);var _=(0,s.aZ)({props:["onclick"]}),g=(0,u.Z)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"mui-btn mui-btn-primary mui-btn-outlined",staticStyle:{display:"inline-block"},attrs:{type:"button"},on:{click:t.onclick}},[n("span",{staticClass:"navbar-toggler-icon"})])}),[],!1,null,null,null).exports,x=n(27),k=(0,s.aZ)({setup:function(){return{container:(0,s.iH)()}},methods:{onclick:function(t){var e=t.target;e&&requestIdleCallback((function(){var t=Reflect.get(e,"scrollIntoView");"function"===typeof t&&Reflect.apply(t,e,[{inline:"center",block:"center"}])}))}},props:["html"],watch:{html:function(t){var e=this;return(0,r.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,t.next=3,x.default.nextTick();case 3:requestAnimationFrame((function(){Array.from(e.container.getElementsByClassName("scrollIntoView")).forEach((function(t){t.onclick=n.onclick}))}));case 4:case"end":return t.stop()}}),t)})))()}}}),C=(0,u.Z)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("div",{ref:"container",attrs:{id:"content-aa867a1d8c5dfbf2abbff8bc2af55a88a36"},domProps:{innerHTML:t._s(t.html)}})])}),[],!1,null,null,null).exports,S=n(7);var E=(0,s.aZ)({setup:function(){return{innerheight:function(){var t=(0,s.iH)(window.innerHeight),e=(0,S.D)((function(){requestAnimationFrame((function(){t.value=window.innerHeight}))}));return(0,s.bv)((function(){window.addEventListener("resize",e)})),(0,s.Ah)((function(){window.removeEventListener("resize",e)})),t}()}},computed:{maxheight:function(){var t=this.top,e=this.innerheight;return String(e-t.replaceAll("px",""))+"px"}},props:["html","top"]}),Z=(0,u.Z)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"mysidebar",staticStyle:{position:"fixed",left:"0"}},[n("div",{staticClass:"container-fluid",staticStyle:{padding:"0"}},[n("div",{ref:"Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644",staticClass:"el-container mysidebarone",style:{"max-height":this.maxheight,top:this.top,left:"0"},attrs:{id:"cebianlan-720feeaf8ee88a6b9b9399876713ed78af4"}},[n("div",{staticClass:"el-aside",staticStyle:{"margin-bottom":"5px","background-color":"white"},attrs:{id:"mynewsidelan-c887e2d697f11af869981691c9830ebd892"},domProps:{innerHTML:t._s(t.html)}})])])])}),[],!1,null,"87d481fe",null).exports;function H(){return String(Object.assign(new URL(location.href),{hash:(0,h.ID)()}))}function N(){return l.Z.maintitle}var A=(0,s.aZ)({components:{Articlemarkdown:C,Toggledisplayofsidebar:g,NavHomebutton:p,Disableablelinks:f,Sidebarleft:Z},setup:function(){var t=(0,c.iH)(),e=(0,c.iH)(),a=(0,c.iH)(),o=(0,c.iH)(),l=function(){var t=(0,c.iH)(window.innerWidth),e=(0,S.D)((function(){requestAnimationFrame((function(){t.value=window.innerWidth}))}));return(0,c.bv)((function(){window.addEventListener("resize",e)})),(0,s.Ah)((function(){window.removeEventListener("resize",e)})),t}(),d=(0,c.Fl)((function(){return l.value>550})),b=(0,c.Fl)((function(){return!d.value})),u={widescreen:d,narrowscreen:b,contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1:a,mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95:e,mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3:t,Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644:o};return(0,c.bv)((function(){(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(14).then(n.bind(n,86));case 2:e=t.sent,(0,e.mymounted)();case 5:case"end":return t.stop()}}),t)})))()})),u},mounted:function(){this.indexhref=H(),this.mytitle=N(),o.w.value=this,m.t.dispatchEvent(new Event("mount")),this.$el.id="app"},watch:{widescreen:function(t){t&&(this.xianshicebianlan=!0)}},data:function(){return{left:"265px",top:"62px",indexhref:H(),contenthtml:"",muluhtml:"",nextpagelink:d.o,prevpagelink:d.o,mytitle:N(),showerror:!1,errorcontent:"",showsrc:!1,urltext:"",xianshicebianlan:!0,showload:!0}},methods:{getsidebarele:function(){return this.Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644.$refs.Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644},togglecebian:function(){this.xianshicebianlan=!this.xianshicebianlan},scrolltotop:function(){var t=(0,y.w)();w.N.setparams({md:t,id:"top"}),scrollTo(0,0)},scrolltobottom:function(){var t=(0,y.w)();w.N.setparams({md:t,id:"bottom"}),scrollTo(0,document.body.scrollHeight)}}}),$=(0,u.Z)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("div",{ref:"mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95",staticClass:"container-fluid fixed-top",staticStyle:{"padding-right":"0","padding-left":"0"},attrs:{id:"mynavigationbar-dceff036a563faf668b4d4a50fd702d1d95"}},[n("nav",{staticClass:"navbar navbar-expand-sm bg-light navbar-light",staticStyle:{"padding-right":"0","padding-left":"0"}},[n("div",{staticClass:"mynavbar",attrs:{id:"nav-3fa9878ebc0dbb05688f058e3bcafc57386"}},[n("Toggledisplayofsidebar",{directives:[{name:"show",rawName:"v-show",value:t.narrowscreen,expression:"narrowscreen"}],attrs:{onclick:t.togglecebian}}),t._v(" "),n("NavHomebutton",{attrs:{href:t.indexhref,title:t.mytitle}}),t._v(" "),n("button",{staticClass:"\n                            mui-btn mui-btn-primary mui-btn-outlined\n                            mybutton-8731e6c5bb5148e49e14cca7cdfa73e8\n                        ",attrs:{type:"button"},on:{click:t.scrolltotop}},[t._v("\n                        \u9876\u90e8\n                    ")]),t._v(" "),n("button",{staticClass:"\n                            mui-btn mui-btn-primary mui-btn-outlined\n                            mybutton-8731e6c5bb5148e49e14cca7cdfa73e8\n                        ",attrs:{type:"button"},on:{click:t.scrolltobottom}},[t._v("\n                        \u5e95\u90e8\n                    ")]),t._v(" "),n("Disableablelinks",{attrs:{href:t.prevpagelink}},[t._v("\n                        \u524d\u9875\n                    ")]),t._v(" "),n("Disableablelinks",{attrs:{href:t.nextpagelink}},[t._v("\n                        \u540e\u9875\n                    ")])],1)])])]),t._v(" "),n("div",{ref:"mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3",staticClass:"mybodycontainer",style:{"margin-top":this.top},attrs:{id:"mybody-143af32b9b8f396b798aeb8d4ee68ed9ca3"}},[n("main",{style:{"margin-left":this.left}},[n("div",{staticClass:"container",staticStyle:{"padding-left":"20px"}},[n("div",[n("div",{ref:"contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1",staticStyle:{"margin-left":"auto"},attrs:{id:"contentcontainer-9ce8d13b9be97b46e89aeea8f242169cfa1"}},[n("h5",{directives:[{name:"show",rawName:"v-show",value:t.showsrc,expression:"showsrc"}],attrs:{id:"markdownurlsrc-63228f01b0737ac6a8b1c08af92dec0eb11"},domProps:{textContent:t._s(t.urltext)}}),t._v(" "),n("h5",{directives:[{name:"show",rawName:"v-show",value:t.showerror,expression:"showerror"}],attrs:{id:"markdownerror-4c6b19f7b26c2b519b8ff480769b5565d6b"},domProps:{textContent:t._s(t.errorcontent)}}),t._v(" "),n("Articlemarkdown",{attrs:{html:t.contenthtml}})],1)])])])]),t._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:t.showload,expression:"showload"}],staticStyle:{position:"fixed"}},[t._m(0)]),t._v(" "),n("Sidebarleft",{directives:[{name:"show",rawName:"v-show",value:t.xianshicebianlan,expression:"xianshicebianlan"}],ref:"Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644",attrs:{top:t.top,html:t.muluhtml}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"loadingparent-b80f303d89182a8e58b02981c0822deb975"}},[n("div",{attrs:{id:"loading-36bec0d286ad9ab9ca8c1d923b0095c1c06"}},[n("h1",{staticClass:"mybigloading"},[t._v("Loading...")])])])}],!1,null,"01f092fe",null).exports}}]);