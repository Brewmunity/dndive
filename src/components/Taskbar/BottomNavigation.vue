<template>
  <div class="outer_div">
    <router-link to="/" style="display: flex; flex-direction: row; align-content: center; height: 100%;">
      <div class="logo_container" title="DnD Helper">
        <dn-dive-icon-l-q class="logo"></dn-dive-icon-l-q>
      </div>
    </router-link>
    <div class="break_left"></div>
    <div class="break_middle"></div>
    <div class="break_right"></div>
    <router-link to="/">
      <div class="homeview_button">
        <home-icon style="height: 80%; color: var(--accent-color)"></home-icon>
      </div>
    </router-link>
    <router-link to="/playmap">
      <div class="mapview_button">
        <map-icon style="height: 80%"></map-icon>
      </div>
    </router-link>
    <chat></chat>
    <div class="userinformation">
      <div class="settings" title="Settings"><cog-icon style="color: white; height: 80%"></cog-icon></div>
      <div class="profile" title="User"><user-icon style="color: white; height: 80%"></user-icon></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {CogIcon, UserIcon, MapIcon, HomeIcon, ScissorsIcon} from "@heroicons/vue/outline";
  import Chat from "../Chat.vue"
  import DnDiveIconHQ from "../General/DnDiveIconHQ.vue";
  import DnDiveIconLQ from "../General/DnDiveIconLQ.vue";
  import {activeViewsStore} from "../../stores/activeViews";
  import {storeToRefs} from "pinia";

  const activeViews = activeViewsStore();
  const {count, tabs, name} = storeToRefs(activeViews)

  async function tost() {
    console.log(name.value, count.value, tabs.value);
    await activeViews.addTab({"Type": "Playmap"});
    await console.log(name.value, count.value, tabs.value);
    await activeViews.addTab({"test11": "yoooo"});
    console.log(name.value, count.value, tabs.value);
    await activeViews.addTab({"test22": "damn"});
    console.log(name.value, count.value, tabs.value);

    console.log(tabs.value[0]["test11"])
  }

  tost();

</script>

<style scoped>
  .outer_div{
    height: 4rem;
    width: 98vw;
    background-color: var(--highlight-color1);
    border-radius: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    z-index: 5;
    transition: all 0.3s ease-in-out;
  }
  .logo_container {
    height: 100%;
    margin-left: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .logo{
    height: 3.5rem;
  }
  .break_left{
    height: 100%;
    min-width: 2rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    box-shadow: 1rem 0.5rem 0 10px var(--background-color);
    margin-right: 0;
    margin-left: -1rem;
  }
  .break_middle{
    height: 100%;
    min-width: 2rem;
    background-color: var(--background-color);
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  .homeview_button{
    justify-content: center;
    height: 3rem;
    width: 3rem;
    background-color: var(--highlight-color3);
    flex-direction: column;
    display: flex;
    border-radius: 5rem;
    margin-left: 0.5rem;
  }
  .mapview_button{
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    background-color: var(--highlight-color3);
    flex-direction: column;
    display: flex;
    border-radius: 5rem;
    margin-left: 1.5rem;
  }
  .mapview_button:hover{
    background-color: var(--highlight-color4);
  }
  .userinformation{
    height: 3rem;
    width: 8rem;
    background-color: var(--highlight-color2);
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
    /*min-width: 5rem;*/
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
    min-width: 1rem;
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
    background-color: var(--highlight-color2);
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

  @media (max-width: 650px) {
  .logo_container{
    display: none;
  }
  .break_left{
    display: none;
  }
  .break_middle{
    display: none;
  }
}
</style>