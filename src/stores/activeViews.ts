import {defineStore} from "pinia";

export const activeViewsStore = defineStore("activeViews", {
    state: () => ({
        count: 0,
        tabs: [],
        name: "Tabs"

    }),
    actions: {
        closeAll(){
            this.count = 0;
        },
        addCount() {
            this.count+=1;
        },
        addTab: function (newTab: object) {
            // this.tabs.push(newTab);
            this.count += 1;
        }
    }
});
