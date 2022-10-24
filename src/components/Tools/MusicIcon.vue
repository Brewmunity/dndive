<template>
  <div class="outer-music-icon">
    <div class="tool-music-image">
      <music-note-icon class="music-icon-image-source"></music-note-icon>
    </div>
    <div class="music-icon-title-area">
      <h3>Music</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {MusicNoteIcon} from "@heroicons/vue/outline";

</script>

<style scoped>
  .outer-music-icon{
    width: 7rem;
    height: 7rem;
    background-color: var(--highlight-color2);
    border-radius: 1rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: hidden;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    position: relative;
  }
  .outer-music-icon:hover{
    transform: scale(110%);
  }
  .outer-music-icon:hover .music-icon-title-area{
    background-color: rgba(53, 34, 173, 0.9);
  }
  .tool-music-image{
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
  }
  .music-icon-image-source{
    height: 80%;
    margin-top: auto;
    z-index: 2;
    transform: scale(1);
    color: white;
  }
  .music-icon-title-area{
    background-color: rgba(53, 34, 173, 0.5);
    height: fit-content;
    width: 100%;
    font-size: 0.8em;
    z-index: 3;
    transition: all 0.1s ease-in-out;
  }
  .music-icon-title-area h3 {
    margin: 0 0.2rem;
    color: white;
  }
</style>