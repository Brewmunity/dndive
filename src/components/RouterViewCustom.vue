<template>
  <router-view
      v-slot="{ Component }"
    >
      <transition
          name="slide-fade"
          mode="out-in"
      >
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
  </router-view>
</template>
<script setup lang="ts">

</script>
<style scoped>
/*Animations*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from{
  transform: translateX(-50px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>