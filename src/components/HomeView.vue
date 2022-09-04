<template>
  <div class="homeview_outer">
    <div id="homeview_tab_bar_highlight_bar_top" style="height: 0.5rem; width: 100%; background-color: var(--highlight-color2); border-radius: 0.5rem 0.5rem 0 0"></div>
    <div class="homeview_tab_name_container">HOME</div>
    <div class="homeview_campaign_overview"></div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
  .homeview_outer{
    height: 100%;
    width: 100%;
    background-color: var(--highlight-color1);
    border-radius: 0.5rem 0.5rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
  .homeview_tab_name_container{
    height: 1.5rem;
    width: fit-content;
    min-width: 5rem;
    padding-left: 0.5rem;
    padding-right: 0.8rem;
    background-color: var(--highlight-color2);
    border-bottom-right-radius: 1rem;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    font-size: 1.3em;
  }
  .homeview_campaign_overview{
    width: 15rem;
    height: 15rem;
    background-color: red;
  }
</style>