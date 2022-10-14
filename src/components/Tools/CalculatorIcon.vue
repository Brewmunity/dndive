<template>
  <div class="outer-calculator-icon">
    <div class="tool-calculator-image">
      <calculator-icon class="calculator-icon-image-source"></calculator-icon>
    </div>
    <div class="calculator-icon-title-area">
      <h3>Calculator</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {CalculatorIcon} from "@heroicons/vue/outline";

</script>

<style scoped>
  .outer-calculator-icon{
    width: 7rem;
    height: 7rem;
    background-color: var(--highlight-color2);
    border-radius: 1rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: hidden;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    position: relative;
  }
  .outer-calculator-icon:hover{
    transform: scale(110%);
  }
  .outer-calculator-icon:hover .calculator-icon-title-area{
    background-color: rgba(53, 34, 173, 0.9);
  }
  .tool-calculator-image{
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
  }
  .calculator-icon-image-source{
    height: 80%;
    margin-top: auto;
    z-index: 2;
    transform: scale(1);
    color: red;
  }
  .calculator-icon-title-area{
    background-color: rgba(53, 34, 173, 0.5);
    height: fit-content;
    width: 100%;
    font-size: 0.8em;
    z-index: 3;
    transition: all 0.1s ease-in-out;
  }
  .calculator-icon-title-area h3 {
    margin: 0 0.2rem;
    color: white;
  }
</style>