<script src="./app-home.ts"></script>
<template>
    <div>
        <header>
            <div
                ref="mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95"
                id="mynavigationbar-dceff036a563faf668b4d4a50fd702d1d95"
                class="container-fluid fixed-top"
                style="padding-right: 0; padding-left: 0"
            >
                <nav
                    class="navbar navbar-expand-sm bg-light navbar-light"
                    style="padding-right: 0; padding-left: 0"
                >
                    <div
                        class="mynavbar"
                        id="nav-3fa9878ebc0dbb05688f058e3bcafc57386"
                        style=""
                    >
                        <Toggledisplayofsidebar
                            v-show="narrowscreen"
                            :onclick="togglecebian"
                        ></Toggledisplayofsidebar>

                        <NavHomebutton
                            :href="indexhref"
                            :title="mytitle"
                        ></NavHomebutton>
                        <button
                            class="
                                mui-btn mui-btn-primary mui-btn-outlined
                                mybutton-8731e6c5bb5148e49e14cca7cdfa73e8
                            "
                            type="button"
                            v-on:click="scrolltotop"
                        >
                            顶部
                        </button>
                        <button
                            class="
                                mui-btn mui-btn-primary mui-btn-outlined
                                mybutton-8731e6c5bb5148e49e14cca7cdfa73e8
                            "
                            type="button"
                            v-on:click="scrolltobottom"
                        >
                            底部
                        </button>
                        <Disableablelinks :href="prevpagelink">
                            前页
                        </Disableablelinks>
                        <Disableablelinks :href="nextpagelink">
                            后页
                        </Disableablelinks>
                    </div>
                </nav>
            </div>
        </header>
        <div
            class="mybodycontainer"
            :style="{
                'margin-top': this.top,
            }"
            ref="mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3"
            id="mybody-143af32b9b8f396b798aeb8d4ee68ed9ca3"
        >
            <main :style="{ 'margin-left': this.left }">
                <div class="container" style="padding-left: 20px">
                    <div>
                        <div
                            ref="contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1"
                            id="contentcontainer-9ce8d13b9be97b46e89aeea8f242169cfa1"
                            style="margin-left: auto"
                        >
                            <h5
                                class
                                id="markdownurlsrc-63228f01b0737ac6a8b1c08af92dec0eb11"
                                v-text="urltext"
                                v-show="showsrc"
                            ></h5>
                            <h5
                                class
                                id="markdownerror-4c6b19f7b26c2b519b8ff480769b5565d6b"
                                v-show="showerror"
                                v-text="errorcontent"
                            ></h5>
                            <Articlemarkdown :html="contenthtml" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <section v-show="showload" style="position: fixed">
            <div id="loadingparent-b80f303d89182a8e58b02981c0822deb975">
                <div id="loading-36bec0d286ad9ab9ca8c1d923b0095c1c06">
                    <h1 class="mybigloading">Loading...</h1>
                </div>
            </div>
        </section>
        <Sidebarleft
            :top="top"
            ref="Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644"
            :html="muluhtml"
            v-show="xianshicebianlan"
        ></Sidebarleft>
    </div>
</template>
<style scoped>
.mybigloading {
    font-size: 50px;
    background-color: white;
    border-radius: 10px;
    border: black 3px solid;
    padding: 5px;
}

.mybodycontainer {
    display: block;
    width: 100%;
    max-width: 100%;
    align-items: center;
    justify-content: space-between;
    align-content: stretch;
}
.mynavbar {
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: stretch;
}
</style>
