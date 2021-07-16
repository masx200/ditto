<template>
    <aside class="mysidebar" style="position: fixed;left:0;top:62px">
        <div class="container-fluid" style="padding: 0">
            <div
                ref="Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644"
                id="cebianlan-720feeaf8ee88a6b9b9399876713ed78af4"
                class="el-container"
                style="border: 1px solid white; position: inherit"
            >
                <div
                    v-html="html"
                    id="mynewsidelan-c887e2d697f11af869981691c9830ebd892"
                    class="el-aside"
                    style="background-color: white"
                ></div>
            </div>
        </div>
    </aside>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    props: ["html"],
});
</script>

<style></style>
