import Vue from "vue";
import Vuex from "vuex";
import { DECREASE_AGE, DECREASE_ONE } from "./mutation-types";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    family: [
      { name: "Kasia", age: 37, show: false },
      { name: "Lukas", age: 38, show: false },
      { name: "Witek", age: 6, show: false },
      { name: "Bruno", age: 6, show: false },
    ],
  },
  getters: {
    addSurname: (state) => {
      return state.family.map((member) => {
        return {
          ...member,
          surname: "Kurek",
        };
      });
    },
  },
  mutations: {
    [DECREASE_AGE](state, payload) {
      state.family.forEach((member) => {
        member.age = member.age - payload.amount;
      });
    },
    [DECREASE_ONE](state, payload) {
      state.family = state.family.map((member) => {
        return {
          ...member,
          age: member.name === payload.name ? member.age - 1 : member.age,
        };
      });
    },
  },
  actions: {
    [DECREASE_ONE](context, payload) {
      setTimeout(() => context.commit(DECREASE_ONE, payload), 1000);
    },
  },
});
