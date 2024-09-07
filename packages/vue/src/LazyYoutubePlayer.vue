<template>
  <div ref="ytContainer" class="NexosYt" :data-embed="videoId"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { LazyYoutubePlayer } from '../core/index.js';

const props = defineProps({
  videoId: {
    type: String,
    required: true
  }
});

const ytContainer = ref(null);

onMounted(() => {
  if (ytContainer.value) {
    new LazyYoutubePlayer(ytContainer.value, props.videoId);
  }
});
</script>

<style src="../core/style.css"></style>
