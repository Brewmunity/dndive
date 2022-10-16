import {ref, computed} from "vue";
import {defineStore} from "pinia";


export const userLoggedInStore = defineStore("userLoggedIn", ()=>{
    const userLoggedIn = ref(false);

    const changeStatus = () =>{
        userLoggedIn.value = !userLoggedIn.value;
    }

    return {
        userLoggedIn,
        changeStatus,
    };
});