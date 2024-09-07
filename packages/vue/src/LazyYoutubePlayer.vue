<template>
    <div :id="`youtube-player-${videoId}`" :class="customClass"></div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, watch } from 'vue';
    import { LazyYoutubePlayerCore, LazyYoutubePlayerOptions } from '@lazy-youtube-player/core';
    import '@lazy-youtube-player/core/styles.css';

    export default defineComponent({
        props: {
            videoId: { type: String, required: true },
            width: { type: Number, default: 640 },
            height: { type: Number, default: 360 },
            autoplay: { type: Boolean, default: false },
            customClass: { type: String, default: '' },
        },
        setup(props: LazyYoutubePlayerOptions) {
            let core: LazyYoutubePlayerCore;

            const initPlayer = () => {
                core = new LazyYoutubePlayerCore(props);
                core.init(`youtube-player-${props.videoId}`);
            };

            onMounted(initPlayer);
            watch(() => props.videoId, initPlayer);

            return {};
        },
    });
</script>