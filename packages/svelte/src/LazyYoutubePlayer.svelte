<script>
  import { onMount } from 'svelte';
  import { LazyYoutubePlayer } from '../core/index.js';

  export let videoId;

  let ytContainer;

  onMount(() => {
    if (ytContainer) {
      new LazyYoutubePlayer(ytContainer, videoId);
    }
  });
</script>

<div bind:this={ytContainer} class="NexosYt" data-embed={videoId}></div>

<style src="../core/style.css"></style>
