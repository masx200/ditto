<template>
    <button
        style="display: inline-block"
        class="mui-btn mui-btn-primary mui-btn-outlined"
        type="button"
        v-on:click="onclick"
    >
        <span class="navbar-toggler-icon"></span>
    </button>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    props: ["onclick"],
});
</script>
