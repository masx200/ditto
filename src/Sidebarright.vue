<template>
    <aside
        class="mysidebarright"
        :style="{
            'max-height': this.maxheight,
            top: this.top,
            left: this.left,
        }"
    >
        <div
            ref="sidebarright"
            v-html="html"
            style="max-height: inherit; overflow: auto"
        />
    </aside>
</template>
<style scoped>
.mysidebarright {
    width: fit-content;
    margin-bottom: 5px;
    max-width: 400px;
    padding-bottom: 5px;
    border: 1px solid white;
    position: fixed;
    background-color: white;
}
</style>
<script lang="ts" src="./Sidebarright.ts"></script>
