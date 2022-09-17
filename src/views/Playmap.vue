<template>
  <div class="playmap_outer_div">
    <div id="playmap_tab_bar_highlight_bar_top" style="height: 0.5rem; width: 100%; background-color: var(--highlight-color2); border-radius: 0.5rem 0.5rem 0 0"></div>
    <div class="playmap_tab_name_container">
      MAP
    </div>
    <div class="playmap_tab_bar">
      <div class="playmap_tab_settings" title="Tab Settings">
        <dots-horizontal-icon style="height: 100%; color: var(--accent-color)"></dots-horizontal-icon>
      </div>
      <div class="playmap_tab_close">
        <x-icon style="height: 100%; color: var(--accent-color)"></x-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {DotsHorizontalIcon, XIcon} from "@heroicons/vue/solid";

</script>

<style scoped>
  .playmap_outer_div{
    height: 100%;
    width: 100%;
    background-color: var(--highlight-color1);
    border-radius: 0.5rem 0.5rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
  .playmap_tab_name_container{
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
  .playmap_tab_bar{
    height: 1.5rem;
    width: 5rem;
    min-width: 5rem;
    position: absolute;
    transform: translateY(0.5rem);
    background-color: var(--highlight-color2);
    border-radius: 0 0 0 1rem;
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    z-index: 2;
  }
  .playmap_tab_settings{
    margin-left: auto;
    border-radius: 2rem;
    background-color: var(--highlight-color3);
    height: 60%;
    padding: 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  .playmap_tab_close{
    height: 60%;
    border-radius: 2rem;
    background-color: var(--highlight-color3);
    margin-left: 20%;
    margin-right: 0.5rem;
    padding: 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
</style>