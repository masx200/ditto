<template>
    <a
        class="
            navbar-brand navbar-brand
            mui-btn mui-btn-primary mui-btn-outlined
        "
        v-bind:href="href"
        style="margin: 0; top: 0px"
    >
        <slot />
    </a>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    props: ["href"],
});
</script>
