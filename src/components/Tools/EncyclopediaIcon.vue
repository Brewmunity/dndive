<template>
  <div class="outer-encyclopedia-icon">
    <div class="encyclopedia-image">
      <book-open-icon class="encyclopedia-image-source"></book-open-icon>
    </div>
    <div class="encyclopedia-title-area">
      <h3>Encyclopedia</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {BookOpenIcon} from "@heroicons/vue/outline";
</script>

<style scoped>
  .outer-encyclopedia-icon{
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
  .outer-encyclopedia-icon:hover{
    transform: scale(110%);
  }
  .outer-encyclopedia-icon:hover .encyclopedia-title-area{
    background-color: rgba(53, 34, 173, 0.9);
  }
  .encyclopedia-image{
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
  }
  .encyclopedia-image-source{
    height: 80%;
    margin-top: auto;
    z-index: 2;
    transform: scale(1);
    color: red;
  }
  .encyclopedia-title-area{
    background-color: rgba(53, 34, 173, 0.5);
    height: fit-content;
    width: 100%;
    font-size: 0.8em;
    z-index: 3;
    transition: all 0.1s ease-in-out;
  }
  .encyclopedia-title-area h3 {
    margin: 0 0.2rem;
    color: white;
  }
</style>