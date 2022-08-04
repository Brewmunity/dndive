<template>
  <div class="site">

    <playmap></playmap>
<!--    <user-info></user-info>-->
    <bottom-navigation></bottom-navigation>


  </div>
</template>

<script setup lang="ts">
import Playmap from "./components/Playmap.vue"
import BottomNavigation from "./components/BottomNavigation.vue";
import UserInfo from "./components/UserInfo.vue";
import {SunIcon} from "@heroicons/vue/outline";
document.title = 'DnDHelper'

</script>

<style scoped>
  .site {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100vw;
    height: 100vh;
    background-color: var(--background-color);
    align-items: center;
  }
</style>

