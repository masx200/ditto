parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KJDi":[function(require,module,exports) {
$(function(t){var e={content_id:t("#content"),sidebar_id:t("#sidebar"),edit_id:t("#edit"),back_to_top_id:t("#back_to_top"),loading_id:t("#loading"),error_id:t("#error"),search_name:t("#search"),search_results_class:".search_results",fragments_class:".fragments",fragment_class:".fragment",highlight_code:!0,sidebar:!0,edit_button:!0,back_to_top_button:!0,searchbar:!0,github_username:null,github_repo:null,run:function(){e.sidebar&&t.get(e.sidebar_file,function(a){var i,r;e.sidebar_id.html(marked(a)),e.searchbar&&(i=e.sidebar_id.html(),r="<input name='"+e.search_name.selector+"'",r=(r+=" type='search'")+" results='10'>",i=i.replace("[ditto:searchbar]",r),e.sidebar_id.html(i),t("input[name="+e.search_name.selector+"]").keydown(n)),t("#sidebar > ul").addClass("navbar-nav"),t("#sidebar > h1").addClass("nav-item"),t("#sidebar > p").addClass("nav-item"),t("#sidebar > p>a").addClass("nav-link"),t("#sidebar > h2").addClass("nav-item"),t("#sidebar > li").addClass("nav-item"),t("#sidebar > a").addClass("nav-link"),t("#sidebar >ul> li").addClass("nav-item"),t("#sidebar > ol").addClass("navbar-nav"),t("#sidebar >ol> li").addClass("nav-item"),t("#sidebar ol>li> a").addClass("nav-link"),t("#sidebar ul>li> a").addClass("nav-link")},"text").fail(function(){alert("Opps! can't find the sidebar file to display!")});e.back_to_top_button&&(e.back_to_top_id.show(),e.back_to_top_id.on("click",function(){t("body, html").animate({scrollTop:0},200)}));e.edit_button&&(null===e.base_url?alert("Error! You didn't set 'base_url' when calling ditto.run()!"):(e.edit_id.show(),e.edit_id.on("click",function(){var t=location.hash.replace("#","/");""===t&&(t="/"+e.index.replace(".md","")),window.open(e.base_url+t+".md")})));e.highlight_code&&hljs.initHighlightingOnLoad();_(),t(window).on("hashchange",_)}};function a(a){var i="";i+="<ul class='"+e.fragments_class.replace(".","")+"'>";for(var n=0;n<a.length;n++){var r=a[n].fragment.replace("/[-]/g","");i+="<li class='"+e.fragment_class.replace(".","")+"'>",i+="<pre><code> ",i+=r=t("#hide").text(r).html(),i+=" </code></pre></li>"}return i+="</ul>"}function i(i){var n="<h1>Search Results</h1>";i.items.length?(d(),n+=function(t){var i="";i+="<ul class='"+e.search_results_class.replace(".","")+"'>";for(var n=0;n<t.length;n++){var r=t[n].path;if(r!==e.sidebar_file){r.replace(".md","");window.location.origin,i+="<li class='link'>",i+=r,i+="</li>",i+=a(t[n].text_matches)}}return i+="</ul>"}(i.items)):c("Opps.. Found no matches!"),e.content_id.html(n),t(e.search_results_class+" .link").click(function(){var e="#"+t(this).html().replace(".md","");location.hash=e})}function n(a){if(13===a.which){var i=t("input[name="+e.search_name.selector+"]").val();""!==i?location.hash="#search="+i:alert("Error! Empty search query!")}}function r(t){return t.replace(/[&\/\\#,+=()$~%.'":*?<>{}\ \]\[]/g,"_")}function o(a,i){html_safe_tag=r(a.text()),a.attr("id",html_safe_tag),a.attr("class","link"),t(e.content_id.selector+" li#"+a.attr("id")).click(function(){var e=t("h"+i+"."+a.attr("id"));t("html, body").animate({scrollTop:e.offset().top},200),original_color=e.css("color"),e.animate({color:"#ED1C24"},500,function(){t(this).animate({color:original_color},2500)})})}function l(t){var e=function(t){return t.replace(/watch\?v\=/g,"embed/")}(function(t){var e=String(t.match(/(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+/g));return e=e.replace(/]/g,"")}(t)),a='<div class="youtube_video">\n      <div style="position:relative;height:0;padding-bottom:56.25%">\n        <iframe src="<link>?ecver=2"\n          width="640"\n          height="360"\n          frameborder="0"\n          style="position:absolute;width:100%;height:100%;left:0"\n          allowfullscreen>\n        </iframe>\n      </div>\n    </div>';return a=a.replace("<link>",e),t=t.replace(/\[ditto\:youtube:(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+\]/g,a)}function s(){e.content_id.find("img").map(function(){var e=t(this).attr("src").replace(/^\.\//,"");if("http"!==t(this).attr("src").slice(0,5)){var a=location.hash.replace("#",""),i=(a=a.split("/")).slice(0,a.length-1).join("/");i?t(this).attr("src",i+"/"+e):t(this).attr("src",e)}})}function c(t){e.error_id.html(t),e.error_id.show()}function d(){e.error_id.hide()}function h(){clearInterval(e.loading_interval),e.loading_id.hide()}function u(){window.scrollTo(0,0);var a=location.hash.replace("#","./");"index.html"===location.pathname.split("/").pop()?(a=location.pathname.replace("index.html",e.index),s()):""===a?(a=window.location+e.index,s()):a+=".md",e.loading_id.show(),e.content_id.html(""),e.loading_interval=setInterval(function(){e.loading_id.fadeIn(1e3).fadeOut(1e3)},2e3),t.get(a,function(a){!function(a,i,n){d(),i=l(i),i=function(t){return t.replace(/&amp;#92;/g,"\\").replace(/&amp;#95;/g,"_")}(i=marked((c=i,c.replace(/\\/g,"&#92;").replace(/\_/g,"&#95;")))),e.content_id.html(i),h(),t("img").map(function(){var e=t(this).attr("src").split("/"),a=(e[0],e[2]);t.inArray(a,["travis-ci.com","travis-ci.org","coveralls.io"])>=0&&t(this).attr("class","github_badges")}),s(),function(){for(var a=2;a<=4;a++){var i=[];t(e.content_id.selector+" h"+a).map(function(){i.push(t(this).text()),t(this).addClass(r(t(this).text()))}),t(e.content_id.selector+" ul li").map(function(){for(var e=0;e<i.length;e++)i[e]===t(this).text()&&o(t(this),a)})}}(),e.highlight_code&&t("pre code").each(function(t,e){hljs.highlightBlock(e)});var c;n&&n(i)}(0,a,function(){if(MathJax&&MathJax.Extension["Tex/AMSmath"]){MathJax.Extension["TeX/AMSmath"].startNumber=0,MathJax.Extension["TeX/AMSmath"].labels={};var t=document.getElementById("content");MathJax.Hub.Queue(["Typeset",MathJax.Hub,t])}})}).fail(function(){console.error("Opps! ... File not found!\n5秒后返回主页"),c("Opps! ... File not found!\n5秒后返回主页"),h(),setTimeout(function(){location.hash="#"},5e3)})}function _(){var a=location.hash;"search"!==a.slice(1,7)?u():e.searchbar&&function(a){if(e.github_username&&e.github_repo){var n="https://api.github.com/search/code?q="+a+"+in:file+language:markdown+repo:"+e.github_username+"/"+e.github_repo;t.ajax(n,{headers:{Accept:"application/vnd.github.v3.text-match+json"}}).done(function(t){i(t)})}null==e.github_username&&null==e.github_repo?alert("You have not set ditto.github_username and ditto.github_repo!"):null==e.github_username?alert("You have not set ditto.github_username!"):null==e.github_repo&&alert("You have not set ditto.github_repo!")}(a.replace("#search=",""))}window.ditto=e});
},{}]},{},["KJDi"], null)
//# sourceMappingURL=ditto.617fc0e3.js.map