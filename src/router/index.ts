import {createWebHistory, createRouter} from "vue-router";
import HomeView from "/src/views/HomeView.vue";
import Playmap from "/src/views/Playmap.vue";
import MusicTool from "/src/views/MusicView.vue";


const routes = [
    {
        path: "/",
        name: "Homeview",
        component: HomeView

    },
    {
        path: "/playmap",
        name: "Playmap",
        component: Playmap
    },
    {
        path: "/music",
        name: "Music",
        component: MusicTool
    }
];
const router = createRouter({history:createWebHistory(), routes})

export default router;
