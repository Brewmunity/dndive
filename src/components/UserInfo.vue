<template>
  <div title="User Information" class="outer_div">
    <user-icon class="user_icon"></user-icon>
  </div>
</template>

<script setup lang="ts">
  import {UserIcon} from "@heroicons/vue/outline";
</script>

<style scoped>
  .outer_div{
    width: 5vh;
    height: 5vh;
    background-color: #435653;
    position: absolute;
    right: 5px;
    top: .5vh;
    z-index: 5;
    border: 2px solid black;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .outer_div:hover{
    background-color: #5d726e;
    transition: all 0.1s ease-in-out;
  }
  .user_icon{
    height: 80%;
    align-self: center;
    justify-self: center;
  }
</style>