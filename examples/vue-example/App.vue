<template>
  <div id="app">
    <h1>Lazy YouTube Player - Vue Example</h1>
    <LazyYoutubePlayer
      video-id="dQw4w9WgXcQ"
      :width="640"
      :height="360"
      :autoplay="false"
    />
  </div>
</template>

<script>
import { LazyYoutubePlayer } from '@lazy-youtube-player/vue';

export default {
  name: 'App',
  components: {
    LazyYoutubePlayer
  }
}
</script>