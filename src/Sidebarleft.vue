<template>
    <aside class="mysidebar" style="position: fixed; left: 0">
        <div class="container-fluid" style="padding: 0">
            <div
                ref="Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644"
                id="cebianlan-720feeaf8ee88a6b9b9399876713ed78af4"
                class="el-container mysidebarone"
                :style="{
                    'max-height': this.maxheight,
                    top: this.top,
                    left: '0',
                }"
            >
                <div
                    v-html="html"
                    id="mynewsidelan-c887e2d697f11af869981691c9830ebd892"
                    class="el-aside"
                    style="margin-bottom: 5px; background-color: white"
                ></div>
            </div>
        </div>
    </aside>
</template>

<script src="./Sidebarleft.ts"></script>

<style scoped>
.mysidebarone {
    max-width: 500px;
    padding-bottom: 5px;
    border: 1px solid white;
    position: fixed;
}
</style>
