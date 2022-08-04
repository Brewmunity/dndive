<template>
  <div class="outer_div">

    <div class="interface">
      <div class="left_buttons">
        <div class="select_tool">
          <cursor-click-icon style="color: black; "/>
        </div>
        <div class="draw_tool">
          <pencil-icon style="color: black"/>
        </div>
        <div class="ruler_tool">
          <img src="src/assets/icons/general/RulerIcon.png" style="width: 100%;" alt="ruler_tool"/>
        </div>
        <div class="help_tool">
          <question-mark-circle-icon style="color: black"/>
        </div>
        <div class="enemies_tool">
          <emoji-sad-icon style="color: black"/>
        </div>
        <div class="players_tool">
          <user-icon style="color: black"/>
        </div>
        <div class="characters_tool">
          <emoji-happy-icon style="color: black"/>
        </div>
        <div class="layer_tool">
          <map-icon style="color: black"/>
        </div>
        <div class="dynamic_lights_tool">
          <light-bulb-icon style="color: black"/>
        </div>
        <div class="filter_tool">
          <filter-icon style="color: black"/>
        </div>
        <div class="filter_tool">
          <filter-icon style="color: black"/>
        </div>
        <div class="filter_tool">
          <filter-icon style="color: black"/>
        </div>
        <div class="filter_tool">
          <filter-icon style="color: black"/>
        </div>
      </div>
      <div class="map_grid">
        <div class="test" v-for="item in (parseInt(sqrm)*parseInt(sqrm))">

        </div>
      </div>
      <div class="map">

      </div>
    </div>
    <div>
      <input v-model="sqrm" type="number"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {CursorClickIcon, PencilIcon, QuestionMarkCircleIcon, EmojiSadIcon, EmojiHappyIcon, UserIcon, MapIcon, LightBulbIcon, FilterIcon} from "@heroicons/vue/outline";
import {ref} from "vue";

const sqrm = ref(0);


</script>

<style scoped>
  .test{
    width: 25px;
    height: 25px;
    background-color: rgba(255, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
  .outer_div{
    align-self: center;
    position: relative;
    width: 100%;
    height: 100%;
    /*background-color: blue;*/
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    z-index: 1;
  }
  .left_buttons{
    width: 3vw;
    height: 84%;
    position: absolute;
    background-color: rgba(81, 30, 119, 0.8);
    margin-top: 0.5%;
    margin-left: 0.5%;
    min-width: 60px;
    max-width: 80px;
    z-index: 5;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    gap: 0.5vh;
    overflow: hidden;
    border-radius: 1rem;
  }
  .interface{
    width: 100vw;
    height: 100vh;
    background-color: #240e3b;
    display: flex;
    flex-direction: row;
  }
  .map_grid {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 3;
    overflow: hidden;
    align-content: flex-start;
    }
  .left_buttons div{
    background-color: rgba(125, 168, 199, 0.5);
    border-radius: 1rem;
    border: 1px solid #000000;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: all 50ms linear;
    z-index: 2;
  }
  .left_buttons div:hover{
    background-color: rgba(37, 118, 175, 0.63);
    box-shadow: inset 0 0 10px 4px rgba(162, 151, 151, 0.8);
  }
  .left_buttons div:first-child{
    margin-top: 0.5rem;
  }
</style>