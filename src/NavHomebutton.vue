<template>
    <a
        class="
            navbar-brand navbar-brand
            mui-btn mui-btn-primary mui-btn-outlined
        "
        v-bind:href="href"
        v-text="title"
        style="margin: 0; top: 0px"
        >Markdown Reader</a
    >
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    props: ["title", "href"],
});
</script>
