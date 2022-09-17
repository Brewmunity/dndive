<template>
  <div class="homeview_outer">
    <div id="homeview_tab_bar_highlight_bar_top" class="homeview_tab_line"></div>
    <div class="homeview_tab_name_container">HOME</div>
    <div class="homeview_site_content">
      <div class="homeview_campaign_overview">
        <div class="homeview-tab-container-title">
          <p>Campaigns</p>
        </div>
        <div class="campaign_overview_list">
          <campaign-icon title="The Sunless Citadel"
                         image="src/assets/images/campaigns/sunlesscitadel.jpg"></campaign-icon>
          <campaign-icon title="Der Revetanische Seelenhändler"
                         image="src/assets/images/campaigns/revetanischerSeelenhändler.jpg"></campaign-icon>
          <campaign-icon title="Unbesiegbarer Teufel"
                         image="src/assets/images/campaigns/devil.jpg"></campaign-icon>
          <campaign-icon title="Das erste Königreich"></campaign-icon>
          <campaign-icon title="Das Vertraute Bardenspiel"
                         image="src/assets/images/campaigns/bard.jpg"></campaign-icon>
          <campaign-icon title="Eldoks Erbe"
                         image="src/assets/images/campaigns/turtle.jpg"></campaign-icon>
          <campaign-icon title="Einsames Rudel"></campaign-icon>
        </div>
      </div>
      <div class="homeview_right_container">
        <div class="homeview_right_characters_container">
          <div class="homeview-tab-container-title">
            <p>Characters</p>
          </div>
          <div class="characters-overview-list">
            <character-icon name="Er'hat Krea" ></character-icon>
            <character-icon name="Ruby" ></character-icon>
            <character-icon name="Samson" ></character-icon>
            <character-icon name="Trunk" ></character-icon>
            <character-icon name="Trunk" ></character-icon>
            <character-icon name="Trunk" ></character-icon>
            <character-icon name="Trunk" ></character-icon>
            <character-icon name="Trunk" ></character-icon>
            <character-icon name="Trunk" ></character-icon>
            <character-icon name="Trunk" ></character-icon>
            <character-icon name="Trunk" ></character-icon>
            <character-icon name="Trunk" ></character-icon>
            <character-icon name="Trunk" ></character-icon>
            <character-icon name="Trunk" ></character-icon>
            <character-icon name="Trunk" ></character-icon>
            <character-icon name="Trunk" ></character-icon>
            <character-icon name="Trunk" ></character-icon>

          </div>
        </div>
        <div class="homeview_right_tools_container">
          <div class="homeview_tools_overview_container_title">
            <p>Tools</p>
          </div>
          <div class="tools-overview-list">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CampaignIcon from "../components/Home/CampaignIcon.vue";
import CharacterIcon from "../components/Home/CharacterIcon.vue";
</script>

<style scoped>
  .homeview_outer{
    height: 100%;
    width: 100%;
    background-color: var(--highlight-color1);
    border-radius: 0.5rem 0.5rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    overflow: hidden;
  }
  .homeview_tab_line{
    height: 0.5rem;
    width: 100%;
    background-color: var(--highlight-color2);
    border-radius: 0.5rem 0.5rem 0 0;
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
  .homeview_site_content{
    height: calc(100% - 3rem);
    width: calc(100% - 1rem);
    margin-top: 0.5rem;
    /*background-color: rgba(0, 128, 0, 0.05);*/
    display: flex;
    align-items: center;
  }
  .homeview_campaign_overview{
    width: 30%;
    min-width: 27rem;
    height: calc(100% - 0.5rem);
    border-radius: 0.5rem 0.5rem 0.5rem 1.5rem;
    border: 4px solid var(--highlight-color2);
    display: flex;
    flex-direction: column;
  }
  .homeview-tab-container-title{
    height: 1.2rem;
    width: 50%;
    background-color: var(--highlight-color2);
    border-bottom-right-radius: 0.5rem;
  }
  .homeview-tab-container-title p {
    margin-top: -3px;
    font-size: 0.8rem;
    color: white;
  }
  .campaign_overview_list{
    width: calc(100% - 1rem);
    height: 100%;
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-evenly;
    overflow: auto;
  }
  .campaign_overview_list::-webkit-scrollbar {
    width: 8px;
  }
  .campaign_overview_list::-webkit-scrollbar-thumb {
    background-color: var(--highlight-color2);
    border-radius: 20px;
  }
  .campaign_overview_list::-webkit-scrollbar-thumb:hover{
    padding-left: 12px;
  }
  .homeview_right_container{
    height: 100%;
    width: 75%;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex-grow: 0;
  }
  .homeview_right_characters_container{
    width: 100%;
    height: 50%;
    border: 4px solid var(--highlight-color2);
    border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
  }
  .characters-overview-list{
    height: 100%;
    width: calc(100% - 1rem);
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-evenly;
    overflow: auto;
  }
  .characters-overview-list::-webkit-scrollbar {
    width: 8px;
  }
  .characters-overview-list::-webkit-scrollbar-track {
    margin-bottom: 20px;
  }
  .characters-overview-list::-webkit-scrollbar-thumb {
    background-color: var(--highlight-color2);
    border-radius: 20px 0 0 20px;
  }
  .characters-overview-list::-webkit-scrollbar-thumb:hover{
    padding-left: 12px;
  }
  .homeview_right_tools_container{
    width: 100%;
    height: 50%;
    border: 4px solid var(--highlight-color2);
    border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;

  }
  .homeview_tools_overview_container_title{
    height: 1.2rem;
    width: 50%;
    background-color: var(--highlight-color2);
    border-bottom-right-radius: 0.5rem;
  }
  .homeview_tools_overview_container_title p{
    margin-top: -3px;
    font-size: 0.8rem;
    color: white;
  }
  .tools-overview-list{
    height: 100%;
    width: calc(100% - 1rem);
    background-color: rgba(255, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-evenly;
    overflow: auto;
  }
  .tools-overview-list::-webkit-scrollbar {
    width: 8px;
  }
  .tools-overview-list::-webkit-scrollbar-thumb {
    background-color: var(--highlight-color2);
    border-radius: 20px;
  }
  .tools-overview-list::-webkit-scrollbar-thumb:hover{
    padding-left: 12px;
  }
</style>