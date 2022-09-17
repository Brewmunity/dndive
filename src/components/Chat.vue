<template>
  <div class="chat_outer_div_open">
    <div :class="[isOpen ? 'chat_box_open': 'chat_box_closed']">
      <div class="chat_settings_control">
        <div class="chat_settings_button_container">
          <dots-horizontal-icon style="color: var(--highlight-color9); height: 100%;"></dots-horizontal-icon>
        </div>
        <div class="chat_close_button_container" @click="isOpen = false">
          <x-icon style="color: var(--highlight-color9); height: 100%;"></x-icon>
        </div>
      </div>
      <div class="chat_stream">

<!--        Dummy Messages Start -->
        <div class="chat_message_other_container">
          <div class="chat_message_other_profile_container">
            <user-icon style="height: 100%; color: white"></user-icon>
          </div>
          <div class="chat_message_other_profile_name_container">
            <p class="role_highlight">DM</p>
            <p class="chat_message_other_profile_name">Anthonyo</p>
          </div>
          <p class="chat_message_other">Bin gleich da, dann kanns los gehen. Schaut euch am besten mal das Ende der letzten Session in der Campeign info an.</p>
        </div>
        <div class="chat_message_other_container">
          <div class="chat_message_other_profile_container">
            <user-icon style="height: 100%; color: white"></user-icon>
          </div>
          <div class="chat_message_other_profile_name_container">
            <p class="role_highlight">Eldok</p>
            <p class="chat_message_other_profile_name">Jan</p>
          </div>
          <p class="chat_message_other">Ich schau mir gleich deine mum an</p>
        </div>
        <div class="chat_message_self_container">
          <div class="chat_message_self_profile_name_container">
            <p class="role_highlight">Ruby</p>
            <p class="chat_message_other_profile_name">Ibi</p>
          </div>
          <div class="chat_message_self_profile_container">
            <user-icon style="height: 100%; color: white"></user-icon>
          </div>
          <p class="chat_message_self">xD</p>
        </div>
        <div class="chat_message_other_container">
          <div class="chat_message_other_profile_container">
            <user-icon style="height: 100%; color: white"></user-icon>
          </div>
          <div class="chat_message_other_profile_name_container">
            <p class="role_highlight">Scarlet</p>
            <p class="chat_message_other_profile_name">Teresa</p>
          </div>
          <p class="chat_message_other">Das war so klar xD</p>
        </div>
        <div class="chat_message_self_container">
          <div class="chat_message_self_profile_name_container">
            <p class="role_highlight">Ruby</p>
            <p class="chat_message_other_profile_name">Ibi</p>
          </div>
          <div class="chat_message_self_profile_container">
            <user-icon style="height: 100%; color: white"></user-icon>
          </div>
          <p class="chat_message_self">Hör auf Leute zu beleidigen beiß in deinen Knoblauch xD </p>
        </div>
        <div class="chat_message_other_container">
          <div class="chat_message_other_profile_container">
            <user-icon style="height: 100%; color: white"></user-icon>
          </div>
          <div class="chat_message_other_profile_name_container">
            <p class="role_highlight">Eldok</p>
            <p class="chat_message_other_profile_name">Jan</p>
          </div>
          <p class="chat_message_other">Shut up, Zitronenlecker, du sagst mir nicht was ich tun soll. Asshole</p>
        </div>
<!--        Dummy Messages End -->

      </div>
      <div class="chat_input_container">
        <textarea class="chat_input_textbox" placeholder="I swear I rolled a nat20..."></textarea>
      </div>
    </div>
    <div class="chat_button" @click="isOpen = !isOpen" title="Chat">
      <div class="chat_button_icon">
        <chat-icon class="chat-icon"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch, toRef} from "vue";
import {ChatIcon, XIcon, DotsVerticalIcon, DotsHorizontalIcon, UserIcon} from "@heroicons/vue/outline";

  const props = defineProps({
    isOpen: Boolean
  })

  const isOpen = ref(props.isOpen);

  watch(
    () => isOpen.value,
    (chatOpen:boolean) => {
      console.log(isOpen.value ? 'Chat is open': 'Chat is closed');
      if (chatOpen) {
        
      }
    }
  )


</script>

<style scoped>
  .chat_outer_div_open{
    margin-left: auto;
    transition: all 0.1s ease-in-out;
  }
  .chat_button{
    width: 3rem;
    height: 3rem;
    background-color: var(--highlight-color2);
    border-radius: 50%;
    cursor: pointer;
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
  .chat_box_open{
    height: 82vh;
    width: 18vw;
    background-color: var(--highlight-color3);
    position: absolute;
    bottom: 5rem;
    right: 0.5rem;
    border-radius: 0.5rem 0.5rem 2rem 2rem;
    transition: all 0.1s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 15rem;
    min-height: 20rem;
    z-index: 5;
  }
  .chat_box_closed{
    height: 82vh;
    width: 18vw;
    background-color: var(--highlight-color3);
    position: absolute;
    bottom: 5rem;
    right: 0.5rem;
    border-radius: 0.5rem 0.5rem 2rem 2rem;
    transition: all 0.1s ease-in-out;
    flex-direction: column;
    align-items: center;
    min-width: 15rem;
    min-height: 20rem;
    z-index: 5;
    opacity: 0;
    display: none;
  }
  .chat_settings_control{
    height: 1.2rem;
    margin-top: 0.3rem;
    width: 95%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
  }
  .chat_settings_button_container{
    border-radius: 2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background-color: var(--highlight-color4);
  }
  .chat_settings_button_container:hover{
    background-color: var(--highlight-color5);
    cursor: pointer;
  }
  .chat_close_button_container{
    border-radius: 2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background-color: var(--highlight-color4);
    margin-left: 0.5rem;
  }
  .chat_close_button_container:hover{
    background-color: var(--highlight-color5);
    cursor: pointer;
  }
  .chat_stream{
    margin-top: 3%;
    height: 80%;
    width: 95%;
    background-color: var(--highlight-color4);
    border-radius: 0.5rem;
    min-height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    -ms-overflow-style: none;
  }
  .chat_stream::-webkit-scrollbar {
    display: none;
  }
  .chat_message_other_container{
    margin-top: 0.2rem;
    margin-left: 0.3rem;
    border-radius: 0.5rem;
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: var(--highlight-color5);
    padding: 0.5rem 0.2rem 0.5rem 0.2rem;
    align-self: flex-start;
    align-items: center;
    margin-bottom: 0.2rem;
  }
  .chat_message_other_profile_container{
    height: 2rem;
    aspect-ratio: 1/1;
    background-color: var(--highlight-color4);
    border-radius: 25%;
    align-self: flex-start;
    margin-left: auto;
    margin-right: auto;
  }
  .chat_message_other_profile_name_container{
    height: 1rem;
    width: fit-content;
    max-width: 8rem;
    background-color: var(--highlight-color4);
    border-radius: 0.5rem 0.5rem 0.5rem 0;
    padding: 0.5rem 0.5rem;
    margin-top: 0;
    flex-grow: 0;
    display: flex;
    gap: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    line-height: 1rem;
    overflow: hidden;
  }
  .role_highlight{
    height: 1rem;
    margin-top: 0;
    flex-grow: 0;
    padding-right: 0.5rem;
    border-right: 0.3rem solid var(--highlight-color6);
    color: var(--accent-color);
  }
  .chat_message_other_profile_name{
    width: fit-content;
    height: 1rem;
    margin-top: 0;
    flex-grow: 0;
  }
  .chat_message_other{
    border-radius: 0.5rem;
    background-color: var(--highlight-color4);
    padding: 0.2rem 0.2rem 0.2rem 0.5rem;
    width: 100%;
    height: fit-content;
    word-wrap: break-word;
    margin: 0.5rem 0.2rem 0 0.3rem;
    text-align: left;
  }

  .chat_message_self_container{
    margin-top: 0.2rem;
    margin-right: 0.3rem;
    border-radius: 0.5rem;
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: var(--highlight-color5);
    padding: 0.5rem 0.2rem 0.5rem 0.2rem;
    align-self: flex-end;
    align-items: center;
    margin-bottom: 0.2rem;
  }
  .chat_message_self_profile_container{
    height: 2rem;
    aspect-ratio: 1/1;
    background-color: var(--highlight-color4);
    border-radius: 25%;
    align-self: flex-start;
    margin-left: auto;
    margin-right: auto;
  }
  .chat_message_self_profile_name_container{
    height: 1rem;
    width: fit-content;
    max-width: 8rem;
    background-color: var(--highlight-color4);
    border-radius: 0.5rem 0.5rem 0 0.5rem;
    padding: 0.5rem 0.5rem;
    margin-top: 0;
    flex-grow: 0;
    display: flex;
    gap: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    line-height: 1rem;
    overflow: hidden;
  }
  .chat_message_self_profile_name{
    width: fit-content;
    height: 1rem;
    margin-top: 0;
    flex-grow: 0;
  }
  .chat_message_self{
    border-radius: 0.5rem;
    background-color: var(--highlight-color4);
    padding: 0.2rem 0.2rem 0.2rem 0.5rem;
    width: 100%;
    height: fit-content;
    word-wrap: break-word;
    margin: 0.5rem 0.2rem 0 0.3rem;
    text-align: left;
  }
  .chat_input_container{
    margin-top: 2%;
    width: 95%;
    height: 14%;
    margin-bottom: 2%;
    border-radius: 0.5rem 0.5rem 1.5rem 1.5rem;
    background-color: var(--highlight-color4);
    display: flex;
    flex-direction: row;
    min-height: 4rem;
    flex-grow: 1;
  }
  .chat_input_textbox{
    padding: 0.5rem;
    box-sizing: border-box;
    border: none;
    height: 99%;
    width: 99%;
    background-color: transparent;
    border-radius: 0.5rem 0.5rem 1.5rem 1.5rem;
    font-size: 15px;
    line-height: 20px;
    overflow-wrap: break-word;
    word-break: break-all;
    text-align: left;
    white-space: pre-wrap;
    resize: none;
  }

  .chat_input_textbox::-webkit-scrollbar {
    width: 10px;
  }
  .chat_input_textbox::-webkit-scrollbar-track {
    background: var(--highlight-color3);
  }
  .chat_input_textbox::-webkit-scrollbar-thumb {
    background-color: var(--highlight-color1);    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
  }

</style>