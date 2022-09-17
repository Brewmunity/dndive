import {createWebHistory, createRouter} from "vue-router";
import HomeView from "/src/views/HomeView.vue";
import Playmap from "/src/views/Playmap.vue";


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
    }
];
const router = createRouter({history:createWebHistory(), routes})

export default router;