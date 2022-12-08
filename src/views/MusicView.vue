<template>
  <div class="outer-div">
    <div class="playlist-outer">
      <div class="playlist-item"></div>
      <div class="playlist-item"></div>

      <div class="add-playlist">Add playlist</div>
    </div>
    <div class="songlist-outer">
      <div class="add-song">
        <p class="add-song-title">Add song</p>
        <div class="add-song-forms">
          <div class="add-song-youtube"></div>
          <div class="add-song-file"></div>

        </div>

      </div>
      <div class="songlist-item"></div>
      <div class="songlist-item"></div>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .outer-div{
    background-color: var(--highlight-color1);
    border-radius: 2rem;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
  }
  .playlist-outer{
    background-color: var(--highlight-color2);
    height: calc(100% - 3rem);
    width: 20%;
    min-width: 12rem;
    margin-left: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem 0 0.5rem 0;
    gap: 0.5rem;
  }
  .playlist-item{
    width: calc(100% - 1rem);
    height: 3rem;
    background-color: var(--highlight-color4);
    border-radius: 0.5rem;
  }
  .add-playlist{
    width: calc(100% - 1rem);
    height: 3rem;
    background-color: var(--highlight-color4);
    border-radius: 0.5rem;
    text-align: center;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .playlist-item:hover, .add-playlist:hover, .songlist-item:hover{
    filter: brightness(130%);
  }
  .songlist-outer{
    background-color: var(--highlight-color2);
    height: calc(100% - 5rem);
    width: 20%;
    min-width: 12rem;
    border-radius: 0 1rem 1rem 0;
    border-left: 0.5rem solid var(--highlight-color1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem 0 0.5rem 0;
    gap: 0.5rem;
    align-self: flex-end;
    margin-bottom: 1rem;
  }
  .songlist-item{
    width: calc(100% - 1rem);
    height: 3rem;
    background-color: var(--highlight-color4);
    border-radius: 0.5rem;
  }
  .add-song{
    width: calc(100% - 1rem);
    height: 12rem;
    background-color: var(--highlight-color4);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 0.5rem;
  }
  .add-song-title{
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.2rem;
  }
  .add-song-forms{
    height: 8rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .add-song-youtube{
    
  }
  .add-song-file{

  }

</style>
