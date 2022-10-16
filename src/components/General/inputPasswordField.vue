<template>
  <div ref="text_input_div" class="text-input-div">
    <input ref="text_input" class="text-input" type="password" @input="inputUpdateValue" v-model="inputField">
    <p ref="input_name" class="input-name">{{props.text}}</p>
  </div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";

  interface Props {
    text: string,
  }
  const props = defineProps<Props>();

  const text_input_div = ref(null);
  const text_input = ref(null);
  const input_name = ref(null);

  const inputField = ref('');

  const inputUpdateValue = () => {
    if(inputField.value){
      console.log(inputField.value)
      text_input.value.style.border = "3px solid white";
      input_name.value.style.transform = "translateY(-2.2rem)";
      input_name.value.style.fontSize = "1rem";
      input_name.value.style.borderLeft = "3px solid white";
      input_name.value.style.borderTop = "3px solid white";
      input_name.value.style.borderRight = "3px solid white";
    }
    if(!inputField.value){
      input_name.value.setAttribute("style", "");
      text_input.value.style.border = "none";
    }


  /*.text-input:focus ~ .input-name{*/
  /*  transform: translateY(-2.2rem);*/
  /*  font-size: 1rem;*/
  /*  border-left: 3px solid white;*/
  /*  border-top: 3px solid white;*/
  /*  border-right: 3px solid white;*/
  /*}*/
  }

</script>

<style scoped>
  .text-input-div{
    width: calc(100% - 4rem);
    height: 3rem;
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
  }
  .text-input{
    height: 100%;
    width: 100%;
    background-color: var(--highlight-color1);
    border-radius: 1rem;
    overflow: hidden;
    border: none;
    z-index: 2;
    font-size: 1.5rem;
    text-align: left;
    flex-grow: 0;
    flex-shrink: 1;
    padding-left: 1rem;
  }
  .text-input:focus{
    border: 1px solid red;
  }
  .input-name{
    z-index: 3;
    pointer-events: none;
    position: absolute;
    left: 2.5rem;
    font-size: 1.5rem;
    color: var(--highlight-color8);
    transition: 0.3s all ease-in-out;
    background-color: var(--highlight-color1);
    padding: 0.2rem 0.5rem 0.2rem 0.5rem;
    border-radius: 0.5rem 0.5rem 0 0;
    border: 3px solid transparent;
  }
</style>