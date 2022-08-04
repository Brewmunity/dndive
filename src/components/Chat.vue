<template>
  <div :class="[isOpen ? 'outer_div': 'outer_div_closed']">
    <button class="chat_button" @click="isOpen = !isOpen">
      <div class="chat_button_icon">
        <chat-icon class="chat-icon"/>
      </div>

    </button>
    <div class="chat_stream">

    </div>
    <div class="chat_input">

    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import {ChatIcon} from "@heroicons/vue/outline";

  const props = defineProps({
    isOpen: Boolean
  })

  const isOpen = ref(props.isOpen);

  watch(
    () => isOpen.value,
    (chatOpen:boolean) => {
      console.log(`Chat is open: ${chatOpen}`);
      if (chatOpen) {

      }
    }
  )


</script>

<style scoped>
  .outer_div{
    top: 1.5vh;
    align-self: center;
    width: 25vw;
    height: 95vh;
    position: fixed;
    right: 60px;
    max-width: 400px;
    min-width: 250px;
    background-color: #825acc;
    opacity: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;
    transition: all 200ms ease-in-out;
  }
  .outer_div_closed{
    align-self: flex-start;
    width: 0;
    height: 0;
    position: fixed;
    right: 60px;
    top: 1.5vh;
    max-width: 400px;
    background-color: #825acc;
    /*opacity: 0;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;
    transition: all 200ms ease-in-out;
  }
  .outer_div_closed .chat_input {
    min-height: 0;
    width: 0;
  }
  .chat_button{
    position: absolute;
    align-self: flex-end;
    margin-top: 1%;
    margin-right: 1%;
    width: 60px;
    height: 30px;
    background-color: #d0d0d0;
    /*overflow: hidden;*/
    display: flex;
    flex-direction: column;
  }
  .chat_button_icon{
    display: flex;
    justify-content: center;
  }
  .chat_button_icon .chat-icon {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    filter: invert(1);
  }

  .chat_stream{
    width: 95%;
    height: 80%;
    background-color: #d91d8e;
    margin-top: 2%;
  }
  .chat_input{
    margin-top: 2%;
    width: 95%;
    height: 17%;
    background-color: #d3a7b9;
    min-height: 80px;
  }
</style>