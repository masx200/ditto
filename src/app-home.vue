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
                    class="
                        navbar navbar-expand-sm navbar-light
                        Translucent-background
                    "
                    style="padding-right: 0; padding-left: 0"
                >
                    <div
                        class="mynavbar"
                        id="nav-3fa9878ebc0dbb05688f058e3bcafc57386"
                        style=""
                    >
                        <Toggledisplayofsidebar
                            v-show="middlescreen"
                            :onclick="togglecebian"
                        ></Toggledisplayofsidebar>

                        <NavHomebutton :href="indexhref">
                            <div v-if="widescreen">
                                {{ mytitle }}
                            </div>
                            <div v-if="narrowscreen">
                                <span class="house-icon" />
                            </div>
                        </NavHomebutton>
                        <button
                            class="
                                mui-btn mui-btn-primary mui-btn-outlined
                                mybutton-8731e6c5bb5148e49e14cca7cdfa73e8
                            "
                            type="button"
                            v-on:click="scrolltotop"
                        >
                            <div v-if="widescreen">顶部</div>
                            <div v-if="narrowscreen">
                                <span class="up-icon" />
                            </div>
                        </button>
                        <button
                            class="
                                mui-btn mui-btn-primary mui-btn-outlined
                                mybutton-8731e6c5bb5148e49e14cca7cdfa73e8
                            "
                            type="button"
                            v-on:click="scrolltobottom"
                        >
                            <div v-if="widescreen">底部</div>
                            <div v-if="narrowscreen">
                                <span class="down-icon" />
                            </div>
                        </button>
                        <Disableablelinks :href="prevpagelink">
                            <div v-if="widescreen">前页</div>
                            <div v-if="narrowscreen">
                                <span class="left-icon" />
                            </div>
                        </Disableablelinks>
                        <Disableablelinks :href="nextpagelink">
                            <div v-if="widescreen">后页</div>
                            <div v-if="narrowscreen">
                                <span class="right-icon" />
                            </div>
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
        <Bigloading v-show="showload" />
        <Sidebarleft
            :top="top"
            :innerref="sidebarinnerref"
            :html="muluhtml"
            v-show="xianshicebianlan"
        ></Sidebarleft>
        <Sidebarright
            :top="top"
            :html="sidebarrighthtml"
            v-show="xianshicebianlan"
        ></Sidebarright>
    </div>
</template>
<style scoped>
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
