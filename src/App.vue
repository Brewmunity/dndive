<template>
  <div v-if="loginStore.userLoggedIn" class="site">
    <router-view-custom class="application"></router-view-custom>
    <bottom-navigation></bottom-navigation>
  </div>
  <login-site v-if="!loginStore.userLoggedIn"></login-site>
</template>

<script setup lang="ts">
  import BottomNavigation from "./components/Taskbar/BottomNavigation.vue";
  import RouterViewCustom from "./components/RouterViewCustom.vue";
  import LoginSite from "./views/LoginSite.vue";
  import {userLoggedInStore} from "./stores/userLoggedIn";

  document.title = 'DnDive';

  const loginStore = userLoggedInStore();

</script>

<style scoped>
  .site {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    background-color: var(--background-color);
    align-items: center;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
  }
  .application{
    height: 89.5%;
    width: 98%;
    margin-top: 0.5%;
    z-index: 1;
    margin-bottom: 0.6rem;
    transition: all 0.3s ease-in-out;
  }
</style>
