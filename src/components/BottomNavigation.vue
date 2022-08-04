<template>
  <div class="outer_div">
    <div class="logo_container">
      <img style="height: 4rem;" src="src/assets/icons/general/DnDHelper_Logo.png">
    </div>
    <div style="height: 100%;
    width: 2rem; border-radius: 1rem;box-shadow: 1rem 0 0 10px var(--background-color); margin-right: 0"></div>
    <div style="height: 100%;width: 2rem; background-color: var(--background-color); border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem"></div>
    <chat></chat>
    <div class="userinformation">
      <div class="settings"><cog-icon style="color: white; height: 80%"></cog-icon></div>
      <div class="profile"><user-icon style="color: white; height: 80%"></user-icon></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {CogIcon, UserIcon, SearchIcon} from "@heroicons/vue/outline";
  import {SunIcon} from "@heroicons/vue/outline";
  import Chat from "./Chat.vue"
</script>

<style scoped>
  .outer_div{
    height: 4rem;
    width: 98vw;
    background-color: var(--highlight-color1);
    position: absolute;
    bottom: 1vh;
    border-radius: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    z-index: 5;
  }
  .logo_container {
    height: 100%;
    margin-left: 2rem;
  }
  .comnetlogo{
    margin-left: 1vw;
    height: 100%;
    filter: invert(1);
  }
  .searchbar{
    height: 80%;
    width: 50vw;
    background-color: var(--highlight-color1);
    margin-left: 0.2vw;
    border-radius: 1rem;
    color: var(--highlight-color2);
    line-height: 3vh;
    font-size: 100%;
  }
  .userinformation{
    height: 3rem;
    width: 8rem;
    background-color: var(--highlight-color3);
    margin-left: 1rem;
    border-radius: 2rem;
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    align-items: center;
    justify-content: flex-start;
    min-width: 8rem;
    max-width: 8rem;
  }
  .settings{
    height: 100%;
    width: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    cursor: pointer;
    /*background-color: red;*/
  }
  .settings:after{
    content: "";
    width: 1rem;
    height: 50px;
    /*background-color: blue;*/
    margin-left: 4rem;
    position: absolute;
  }
  .settings:hover{
    background-color: var(--highlight-color4);
  }
  .settings:hover:after{
    background-color: var(--highlight-color4);
    height: 3rem;
  }
  .profile{
    height: 2.5rem;
    width: 2.5rem;
    min-width: 2.5rem;
    padding: 0.25rem;
    /*border-left: 10px solid var(--highlight-color4);*/
    /*border-top: 10px solid var(--highlight-color4);*/
    /*border-bottom: 10px solid var(--highlight-color4);*/
    border: 10px solid var(--highlight-color1);
    border-radius: 50%;
    background-color: var(--highlight-color3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /*margin-right: -5px;*/
    margin-left: auto;
    cursor: pointer;
    z-index: 6;
  }
  .profile:hover{
    background-color: var(--highlight-color4);
  }
</style>