<template>
  <div class="outer-character-icon">
    <div class="character-icon-image">
      <img :src="characterImage" class="character-icon-image-source">
    </div>
    <div class="character-icon-title-area">
      <h3>{{props.name}}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue";

  interface Props {
    name: string
    image?: string
  }

  const props = defineProps<Props>();

  const characterImage = ref(props.image);

  if(characterImage.value == null){
    characterImage.value = "src/assets/images/campaigns/default.jpg";
  }

  console.log(props.image);

</script>

<style scoped>
  .outer-character-icon{
    width: 7rem;
    height: 7rem;
    background-color: var(--highlight-color2);
    border-radius: 1rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: hidden;
    background-size: 7rem;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    position: relative;
  }
  .outer-character-icon:hover{
    transform: scale(110%);
  }
  .outer-character-icon:hover .character-icon-title-area{
    background-color: rgba(34, 141, 173, 0.9);
  }
  .character-icon-image{
    height: 100%;
    width: 100%;
    /*background-color: red;*/
    position: absolute;
  }
  .character-icon-image-source{
    height: 100%;
    width: 100%;
    z-index: 2;
    transform: scale(1);
  }
  .character-icon-title-area{
    background-color: rgba(34, 141, 173, 0.5);
    height: fit-content;
    width: 100%;
    font-size: 0.8em;
    z-index: 3;
    transition: all 0.1s ease-in-out;
  }
  .character-icon-title-area h3 {
    margin: 0 0.2rem;
    color: white;
  }
</style>