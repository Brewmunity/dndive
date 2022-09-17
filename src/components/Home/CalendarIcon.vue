<template>
  <div class="outer-calendar-icon">
    <div class="tool-calendar-image">
      <calendar-icon class="tool-icon-image-source"></calendar-icon>
    </div>
    <div class="tool-calendar-title-area">
      <h3>Calendar</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue";
  import {CalendarIcon} from "@heroicons/vue/outline";

  interface Props {
    name: string
    image?: string
  }

  const props = defineProps<Props>();

  console.log(props.image);

</script>

<style scoped>
  .outer-calendar-icon{
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
  .outer-calendar-icon:hover{
    transform: scale(110%);
  }
  .outer-calendar-icon:hover .character-icon-title-area{
    background-color: rgba(34, 141, 173, 0.9);
  }
  .tool-calendar-image{
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
  }
  .tool-icon-image-source{
    height: 80%;
    margin-top: auto;
    z-index: 2;
    transform: scale(1);
  }
  .tool-calendar-title-area{
    background-color: rgba(34, 141, 173, 0.5);
    height: fit-content;
    width: 100%;
    font-size: 0.8em;
    z-index: 3;
    transition: all 0.1s ease-in-out;
  }
  .tool-calendar-title-area h3 {
    margin: 0 0.2rem;
    color: white;
  }
</style>