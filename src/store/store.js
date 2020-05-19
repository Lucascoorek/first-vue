import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    family: [
      { name: "Kasia", age: 37, show: false },
      { name: "Lukas", age: 38, show: false },
      { name: "Witek", age: 6, show: false },
      { name: "Bruno", age: 6, show: false },
    ],
  },
});
