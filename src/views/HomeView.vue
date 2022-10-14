<template>
  <div class="homeview_outer">
    <div id="homeview_tab_bar_highlight_bar_top" class="homeview_tab_line"></div>
    <div class="homeview-tab-bar-info">
      <div class="homeview_tab_name_container">HOME</div>
      <div title="Help" class="homeview-tab-help-container">
        <question-mark-circle-icon class="help-icon"></question-mark-circle-icon>
      </div>
    </div>
    <div class="homeview_site_content">
      <div class="homeview_campaign_overview">
        <div class="homeview-tab-container-title">
          <p>Campaigns</p>
        </div>
        <div class="campaign_overview_list">
          <campaign-icon
              v-for="campaign in campaignList"
              :title="campaign.campaignName" :image="campaign.campaignImage">
          </campaign-icon>
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

          <div class="add-campaign-icon">
            <p>Add Campaign</p>
            <plus-icon class="add-campaign-plus-icon"></plus-icon>
          </div>
        </div>
      </div>
      <div class="homeview_right_container">
        <div class="homeview_right_characters_container">
          <div class="homeview-tab-container-title">
            <p>Characters</p>
          </div>
          <div class="characters-overview-list">
            <character-icon
                v-for="character in characterList"
                :name="character.characterName" :image="character.characterImage">
            </character-icon>
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

            <div class="add-character-icon">
              <p>Add Character</p>
              <plus-icon class="add-character-plus-icon"></plus-icon>
            </div>
          </div>
        </div>
        <div class="homeview_right_tools_container">
          <div class="homeview_tools_overview_container_title">
            <p>Tools</p>
          </div>
          <div class="tools-overview-list">
            <calendar-icon></calendar-icon>
            <calculator-icon></calculator-icon>
            <encyclopedia-icon></encyclopedia-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CampaignIcon from "../components/Home/CampaignIcon.vue";
import CharacterIcon from "../components/Home/CharacterIcon.vue";
import CalendarIcon from "../components/Tools/CalendarIcon.vue";
import CalculatorIcon from "../components/Tools/CalculatorIcon.vue";
import EncyclopediaIcon from "../components/Tools/EncyclopediaIcon.vue";

import {PlusIcon, QuestionMarkCircleIcon} from "@heroicons/vue/outline";
import {ref} from "vue";

const campaignList = ref([]);
  const characterList = ref([]);

  async function fetchCampaigns() {
    const response = await fetch('http://127.0.0.1:8000/getCampaigns');
    campaignList.value = await response.json();
  }
  fetchCampaigns();

  async function fetchCharacters() {
    const response = await fetch('http://127.0.0.1:8000/getCharacters');
    characterList.value = await response.json();
  }
  fetchCharacters();

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
  .homeview-tab-bar-info{
    display: flex;
    flex-direction: row;
    height: 1.5rem;
    width: 100%;
  }
  .homeview_tab_name_container{
    height: 100%;
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
    cursor: default;
  }
  .homeview-tab-help-container{
    height: 100%;
    width: fit-content;
    min-width: 1.4rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background-color: var(--highlight-color2);
    border-bottom-left-radius: 1rem;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    font-size: 1.3em;
    margin-left: auto;
  }
  .help-icon{
    position: absolute;
    align-self: center;
    height: 1.8rem;
    transform: translateY(-0.4rem);
    cursor: pointer;
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
  .add-campaign-icon{
    height: 9rem;
    width: 9rem;
    background-color: var(--highlight-color2);
    border-radius: 1rem;
    margin: 0.5rem;
    cursor: pointer;
    position: relative;
    transition: all 0.1s ease-in-out;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .add-campaign-icon:hover{
    transform: scale(110%);
  }
  .add-campaign-icon p{
    margin-bottom: 0;
    margin-top: 0.5rem;
    font-size: 1.1em;
  }
  .add-campaign-plus-icon{
    margin-bottom: auto;
  }
  .add-campaign-icon:hover .add-campaign-plus-icon{
    -webkit-animation:spin 2s linear infinite;
    -moz-animation:spin 2s linear infinite;
    animation:spin 2s ease-in-out infinite;
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
  .add-character-icon{
    height: 7rem;
    width: 7rem;
    background-color: var(--highlight-color2);
    border-radius: 1rem;
    margin: 0.5rem;
    cursor: pointer;
    position: relative;
    transition: all 0.1s ease-in-out;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .add-character-icon:hover{
    transform: scale(110%);
  }
  .add-character-icon p{
    font-size: 0.9em;
    margin-top: 0.5rem;
    margin-bottom: 0;
  }
  .add-character-plus-icon{
    margin-bottom: auto;
  }
  .add-character-icon:hover .add-character-plus-icon{
    -webkit-animation:spin 2s linear infinite;
    -moz-animation:spin 2s linear infinite;
    animation:spin 2s ease-in-out infinite;
  }
  .homeview_right_tools_container{
    width: 100%;
    height: 50%;
    border: 4px solid var(--highlight-color2);
    border-radius: 0.5rem 0.5rem 1.5rem 0.5rem;
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

  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
</style>