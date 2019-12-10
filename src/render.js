 'use strict';
import { ApphomeVm } from './mark-down-reader';
import $ from 'jquery';
import ditto from './ditto';
import newconfig from './config';
export function 挂载初始() {
    window.addEventListener('resize', () => {
        内容调整左边偏移();
    });
    $(() => {
        var oldconfig = {
            doctitle: 'markdown-reader',
            subtitle: 'Lightweight Markdown Documentation System',
            github_username: 'masx200',
            github_repo: 'markdown-reader'
        };
        var config = {
            ...oldconfig,
            ...newconfig
        };
        var doctitle = config.doctitle || 'Markdown Reader';
        var subtitle = config.subtitle || 'Lightweight Markdown Documentation System';
        var github_username = config.github_username;
        var github_repo = config.github_repo;
        ditto.index = config.index;
        (() => {
            document.title = doctitle + ' ' + subtitle;
            ApphomeVm.mytitle = doctitle;
            $('#my主体').css('padding-top', $('#my导航栏').height());
            (function () {
                ditto.github_username = github_username;
                ditto.github_repo = github_repo;
                ditto.highlight_code = true;
                ditto.run();
            }());
            function onhashchange() {
                scrollTo(0, 0);
                $('#my主体').css('padding-top', $('#my导航栏').height());
                if (window.innerWidth < 550) {
                    ApphomeVm.xianshicebianlan = false;
                }
            }
            window.addEventListener('hashchange', onhashchange);
        })();
    });
}
export function 内容调整左边偏移() {
    return new Promise(r => {
        requestAnimationFrame(() => {
            if (window.innerWidth > 550) {
                var 左边偏移量 = $('#cebianlan')[0].offsetWidth - $('#contentcontainer').offset().left;
                左边偏移量 = Math.max(左边偏移量, 20);
                $('#contentcontainer').css({ 'padding-left': 左边偏移量 + 20 });
            } else {
                $('#contentcontainer').css({ 'padding-left': 20 });
            }
            r();
        });
    });
}
