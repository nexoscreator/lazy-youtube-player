<script lang="ts">
    import { onMount } from 'svelte';
    import { LazyYoutubePlayerCore, type LazyYoutubePlayerOptions } from '@lazy-youtube-player/core';
    import '@lazy-youtube-player/core/styles.css';

    export let videoId: string;
    export let width: number = 640;
    export let height: number = 360;
    export let autoplay: boolean = false;
    export let customClass: string = '';

    let playerId: string;

    onMount(() => {
        playerId = `youtube-player-${videoId}`;
        const core = new LazyYoutubePlayerCore({ videoId, width, height, autoplay, customClass });
        core.init(playerId);
    });
</script>

<div id={playerId} class={customClass}></div>