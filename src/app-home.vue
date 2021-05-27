<script src="./app-home.js"></script>
<template>
    <div>
        <div
            id="my导航栏"
            class="container-fluid fixed-top"
            style="padding-right: 0; padding-left: 0"
        >
            <nav
                class="navbar navbar-expand-sm bg-light navbar-light"
                style="padding-right: 0; padding-left: 0"
            >
                <div>
                    <a
                        class="
                            navbar-brand navbar-brand
                            mui-btn mui-btn-primary mui-btn-outlined
                        "
                        v-bind:href="indexhref"
                        id="title"
                        v-text="mytitle"
                        style="margin: 0; top: 0px"
                        >Markdon Reader</a
                    >
                    <button
                        class="mui-btn mui-btn-primary mui-btn-outlined"
                        type="button"
                        id="cebianlantoggle"
                        v-on:click="togglecebian"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <button
                        class="mui-btn mui-btn-primary mui-btn-outlined"
                        type="button"
                        v-on:click="scrolltotop"
                    >
                        顶部
                    </button>
                    <button
                        class="mui-btn mui-btn-primary mui-btn-outlined"
                        type="button"
                        v-on:click="scrolltobottom"
                    >
                        底部
                    </button>
                </div>
            </nav>
        </div>

        <div class="container-fluid">
            <div
                ref="我的侧边栏"
                id="cebianlan"
                class="el-container"
                style="border: 1px solid white; position: fixed"
                v-show="xianshicebianlan"
            >
                <aside
                    ref="目录内容"
                    id="mynewsidelan"
                    class="el-aside"
                    style="background-color: white"
                ></aside>
            </div>
        </div>
        <div id="my主体" class="container">
            <div id="loadingparent">
                <div id="loading">
                    <h1>Loading ...</h1>
                </div>
            </div>
            <div>
                <div id="contentcontainer">
                    <h5 class id="markdownurlsrc" v-text="urltext"></h5>
                    <h5
                        class
                        id="markdownerror"
                        v-show="showerror"
                        v-text="errorcontent"
                    ></h5>
                    <div id="content" ref="markdown内容"></div>
                </div>
            </div>
            <div id="hide"></div>

            <div>
                <h1 id="error"></h1>
            </div>
        </div>
    </div>
</template>
