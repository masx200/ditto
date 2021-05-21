 import jQuery from 'jquery';
import newconfig from './config';
import fetchajaxgettext from './fetchajaxgettext';
import hljs from './highlight.min.js';
import { ApphomeVm } from './mark-down-reader';
import marked from './marked.min';
import MathJax from './MathJax/index';
import { 内容调整左边偏移 } from './render';
import webpackrequirepublicpath from './webpack-require-public-path';
const cachemarkdown = new Map();
'use strict';
var readme加载失败 = false;
export default (() => {
    'use strict';
    return function ($) {
        var ditto = {
            //sidebar_file: 'sidebar.md',
            index: 'README.md',
            content_id: $('#content'),
            sidebar_id: $('#sidebar'),
            edit_id: $('#edit'),
            back_to_top_id: $('#back_to_top'),
            loading_id: $('#loading'),
            error_id: $('#error'),
            search_name: $('#search'),
            search_results_class: '.search_results',
            fragments_class: '.fragments',
            fragment_class: '.fragment',
            highlight_code: true,
            sidebar: true,
            edit_button: false,
            back_to_top_button: true,
            searchbar: true,
          
            run: initialize
        };
        function initialize() {
            if (ditto.sidebar) {
                init_sidebar_section();
            }
            if (ditto.back_to_top_button) {
            }
            if (ditto.edit_button) {
            }
            if (ditto.highlight_code) {
                hljs.initHighlightingOnLoad();
            }
            router();
            window.addEventListener('hashchange', router);
        }
        function init_sidebar_section() {
            const summaryfile = new URL(newconfig.summary, webpackrequirepublicpath).href;
            var path = summaryfile;
            fetchajaxgettext(path).then(function (data) {
                ApphomeVm.mulu = marked(data);
                return new Promise(r => {
                    requestAnimationFrame(() => {
                        $(ApphomeVm.$refs.我的侧边栏).css('top', $('#my导航栏').height());
                        $(ApphomeVm.$refs.我的侧边栏.querySelectorAll('ul')).addClass('navbar-nav');
                        $(ApphomeVm.$refs.我的侧边栏.querySelectorAll('a')).addClass(`mui-btn mui-btn-primary mui-btn-outlined`);
                        内容调整左边偏移().then(() => r());
                    });
                }).then(() => {
                    requestAnimationFrame(() => {
                        $('#my主体').css('padding-top', $('#my导航栏').height());
                        Array.from(ApphomeVm.$refs.我的侧边栏.querySelectorAll('a')).map(a => {
                            var b = new URL('#' + a.getAttribute('href'), location.href);
                            a.href = b.href;
                            return b;
                        }).map(e => e.hash).filter(e => e.startsWith('#')).map(e => e.slice(1)).forEach(e => {
                            fetch(new URL(e.endsWith('.md') ? e : e + '.md', webpackrequirepublicpath).toString(), {
                                credentials: 'omit',
                                body: null,
                                method: 'GET',
                                mode: 'cors'
                            });
                        });
                        ApphomeVm.showerror = false;
                    });
                });
            }).catch(function () {
                stop_loading();
                setTimeout(() => {
                    page_getter(true);
                }, 5000);
                console.error('Opps! can\'t find the sidebar file to display!');
                console.warn('load failed ' + path);
                ApphomeVm.errorcontent = '加载失败 ' + path;
                ApphomeVm.showerror = true;
            });
        }
        function show_error(err_msg) {
            ditto.error_id.html(err_msg);
            ditto.error_id.show();
        }
        function hide_errors() {
            ditto.error_id.hide();
        }
        function show_loading() {
            ditto.loading_id.show();
            ditto.loading_interval = setInterval(function () {
                ditto.loading_id.fadeIn(1000).fadeOut(1000);
            }, 2000);
        }
        function stop_loading() {
            clearInterval(ditto.loading_interval);
            ditto.loading_id.hide();
            $('#loadingparent').hide();
        }
        function guid() {
            return 'xxxxxxxxyxxxxyxxxyyxxxyxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 3 | 8;
                return v.toString(16);
            });
        }
        function page_getter(转到主页 = false) {
            window.scrollTo(0, 0);
            var path = location.hash === '' ? './' + ditto.index : location.hash.replace('#', './');
            show_loading();
            if (转到主页 === false) {
            } else {
                path = './' + ditto.index;
            }
            path = path.endsWith('.md') ? path : path + '.md';
            path = new URL(path, webpackrequirepublicpath).toString();
            if (path !== ApphomeVm.urltext) {
                const marktext = cachemarkdown.get(path);
                console.log(cachemarkdown);
                if (marktext) {
                    ApphomeVm.urltext = path;
                    stop_loading();
                    ApphomeVm.content = marktext;
                } else {
                    fetchajaxgettext(path).then(function (data) {
                        $('#collapsibleNavbar').removeClass('show');
                        $('#my主体').css('padding-top', $('#my导航栏').height());
                        return compile_into_dom(data).then(function () {
                            return new Promise(r => {
                                requestAnimationFrame(() => {
                                    if (MathJax && MathJax.Extension['Tex/AMSmath']) {
                                        MathJax.Extension['TeX/AMSmath'].startNumber = 0;
                                        MathJax.Extension['TeX/AMSmath'].labels = {};
                                        var content = ApphomeVm.$refs.markdown内容;
                                        MathJax.Hub.Queue([
                                            'Typeset',
                                            MathJax.Hub,
                                            content
                                        ]);
                                    }
                                    r();
                                });
                            });
                        }).then(() => {
                            return new Promise(r => {
                                requestAnimationFrame(() => {
                                    Array.from(jQuery('code.hljs')).forEach(e => {
                                        var codecontenguid = 'clip' + guid();
                                        jQuery(e).attr('id', codecontenguid).after(`<button class="btn btn-outline-primary clipbutton" data-clipboard-target="#${ codecontenguid }">复制
                                        </button>`);
                                    });
                                    内容调整左边偏移();
                                    setTimeout(() => {
                                        stop_loading();
                                    }, 0);
                                    ApphomeVm.urltext = path;
                                    if (window.innerWidth < 550) {
                                        ApphomeVm.xianshicebianlan = false;
                                    }
                                    var contenthtml = ApphomeVm.$refs.markdown内容.innerHTML;
                                    cachemarkdown.set(path, contenthtml);
                                    r();
                                });
                            });
                        });
                    }).catch(function () {
                        ApphomeVm.urltext = '加载失败 ' + path;
                        if (readme加载失败)
                            return;
                        console.error('Opps! ... File not found!\n5秒后返回主页');
                        show_error('Opps! ... File not found!\n5秒后返回主页');
                        stop_loading();
                        if (!readme加载失败) {
                            setTimeout(() => {
                                page_getter(true);
                            }, 5000);
                        }
                        readme加载失败 = true;
                        console.warn('load failed ' + path);
                        ApphomeVm.urltext = '加载失败 ' + path;
                    });
                }
            }
        }
        function escape_html(string) {
            return string.replace(/\\/g, '&#92;').replace(/\_/g, '&#95;');
        }
        function unescape_html(string) {
            return string.replace(/&amp;#92;/g, '\\').replace(/&amp;#95;/g, '_');
        }
        function compile_into_dom(data) {
            return new Promise(r => {
                hide_errors();
                data = marked(escape_html(data));
                data = unescape_html(data);
                ApphomeVm.content = data;
                requestAnimationFrame(() => {
                    stop_loading();
                    if (ditto.highlight_code) {
                        Array.from($('pre code')).forEach(function (block) {
                            hljs.highlightBlock(block);
                        });
                    }
                    r();
                });
            });
        }
        function router() {
            var hash = location.hash;
            if (!(hash.slice(2, 8) == 'search' || hash.slice(1, 7) == 'search' || location.hash.includes(`search`))) {
                page_getter();
            } else {
            }
        }
        return ditto;
    }(jQuery);
})();
