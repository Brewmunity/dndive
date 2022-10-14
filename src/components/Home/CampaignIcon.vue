<template>
  <div class="outer-campaign-icon">
    <div class="campaign-icon-background-image">
      <img :src="campaignImage" class="campaign-icon-background-image-source">
    </div>
    <div class="campaign-icon-title-area">
      <h3>{{props.title}}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue";

  interface Props {
    title: string
    image?: string
  }

  const props = defineProps<Props>();

  const campaignImage = ref(props.image);

  if(campaignImage.value == null){
    campaignImage.value = "src/assets/images/campaigns/default.jpg";
  }

  // console.log(props.image);

</script>

<style scoped>
  .outer-campaign-icon{
    width: 9rem;
    height: 9rem;
    background-color: var(--highlight-color2);
    border-radius: 1rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: hidden;
    background-size: 9rem;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    position: relative;
  }
  .outer-campaign-icon:hover{
    transform: scale(110%);
  }
  .outer-campaign-icon:hover .campaign-icon-title-area{
    background-color: rgba(34, 173, 133, 0.9);
  }

  .campaign-icon-background-image{
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .campaign-icon-background-image-source{
    height: 100%;
    width: 100%;
    z-index: 2;
    transform: scale(1);
  }
  .campaign-icon-title-area{
    background-color: rgba(34, 173, 133, 0.5);
    height: fit-content;
    width: 100%;
    font-size: 0.8em;
    z-index: 3;
    transition: all 0.1s ease-in-out;
  }
  .campaign-icon-title-area h3 {
    margin: 0 0.2rem;
    color: white;
  }
</style>