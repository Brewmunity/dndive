<template>
  <div :class="[isOpen ? 'outer_div': 'outer_div_closed']">
    <div class="chat_button" @click="isOpen = !isOpen">
      <div class="chat_button_icon">
        <chat-icon class="chat-icon"/>
      </div>

    </div>
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
  }
  .outer_div_closed{
    margin-left: auto;
  }
  .outer_div_closed .chat_input {
    min-height: 0;
    width: 0;
  }
  .chat_button{
    width: 3rem;
    height: 3rem;
    background-color: var(--highlight-color2);
    border-radius: 50%;
  }
  .chat_button_icon{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .chat-icon{
    height: 80%;
  }
  .chat_button:hover{
    background-color: var(--highlight-color4);
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