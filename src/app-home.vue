<script src="./app-home.js"></script>
<template>
    <div>
        <div
            id="mynavigationbar-dceff036a563faf668b4d4a50fd702d1d95"
            class="container-fluid fixed-top"
            style="padding-right: 0; padding-left: 0"
        >
            <nav
                class="navbar navbar-expand-sm bg-light navbar-light"
                style="padding-right: 0; padding-left: 0"
            >
                <div
                    style="
                        display: flex;
                        width: 100%;
                        justify-content: space-between;
                        flex-direction: row;
                        align-items: stretch;
                    "
                >
                    <a
                        class="
                            navbar-brand navbar-brand
                            mui-btn mui-btn-primary mui-btn-outlined
                        "
                        v-bind:href="indexhref"
                        v-text="mytitle"
                        style="margin: 0; top: 0px"
                        >Markdon Reader</a
                    >
                    <button
                        class="mui-btn mui-btn-primary mui-btn-outlined"
                        type="button"
                        id="cebianlantoggle-fa1acbfa95662b9c3a8474970d5a42a303d"
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
                    <button
                        class="mui-btn mui-btn-primary mui-btn-outlined"
                        type="button"
                        v-on:click="toprevpage"
                    >
                        前页
                    </button>
                    <button
                        class="mui-btn mui-btn-primary mui-btn-outlined"
                        type="button"
                        v-on:click="tonextpage"
                    >
                        后页
                    </button>
                </div>
            </nav>
        </div>

        <div class="container-fluid">
            <div
                ref="我的侧边栏"
                id="cebianlan-720feeaf8ee88a6b9b9399876713ed78af4"
                class="el-container"
                style="border: 1px solid white; position: fixed"
                v-show="xianshicebianlan"
            >
                <aside
                    ref="目录内容"
                    id="mynewsidelan-c887e2d697f11af869981691c9830ebd892"
                    class="el-aside"
                    style="background-color: white"
                ></aside>
            </div>
        </div>
        <div id="mybody-143af32b9b8f396b798aeb8d4ee68ed9ca3" class="container">
            <div id="loadingparent-b80f303d89182a8e58b02981c0822deb975">
                <div id="loading-36bec0d286ad9ab9ca8c1d923b0095c1c06">
                    <h1>Loading ...</h1>
                </div>
            </div>
            <div>
                <div id="contentcontainer-9ce8d13b9be97b46e89aeea8f242169cfa1">
                    <h5
                        class
                        id="markdownurlsrc-63228f01b0737ac6a8b1c08af92dec0eb11"
                        v-text="urltext"
                    ></h5>
                    <h5
                        class
                        id="markdownerror-4c6b19f7b26c2b519b8ff480769b5565d6b"
                        v-show="showerror"
                        v-text="errorcontent"
                    ></h5>
                    <div
                        id="content-aa867a1d8c5dfbf2abbff8bc2af55a88a36"
                        ref="markdown内容"
                    ></div>
                </div>
            </div>
            <div id="hide-99277faba965e89bc98bd5920f3abc1c5a0"></div>

            <div>
                <h1 id="error-1a347cb1a67e183f2bbfdc8df58888f3076"></h1>
            </div>
        </div>
    </div>
</template>
