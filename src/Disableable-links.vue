<template>
    <div>
        <a
            style="height: 100%; width: 100%;line-height: inherit;"
            v-if="enabled"
            class="
                mui-btn mui-btn-primary mui-btn-outlined
                mybutton-8731e6c5bb5148e49e14cca7cdfa73e8
            "
            :href="href"
        >
            <slot />
        </a>

        <button
            style="height: 100%; width: 100%"
            type="button"
            v-if="disabled"
            class="
                mui-btn mui-btn-primary mui-btn-outlined
                mybutton-8731e6c5bb5148e49e14cca7cdfa73e8
            "
        >
            <slot />
        </button>
    </div>
</template>

<script lang="ts" src="./Disableable-links.ts"></script>
