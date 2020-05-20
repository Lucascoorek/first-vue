<template>
  <form @submit="changeAge">
    <label for="age">Change {{ member.name }}'s age </label>
    <input id="age" type="text" v-model="age" />
    <label for="submit">You want to change age to: {{ age }}</label>
    <input id="submit" type="submit" value="Change age" />
  </form>
</template>

<script>
import { CHANGE_AGE } from "../../store/mutation-types";
export default {
  name: "ListOneForm",
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      age: "",
    };
  },
  methods: {
    changeAge(e) {
      e.preventDefault();
      console.log({ age: this.age, name: this.member.name });
      this.$store.commit(CHANGE_AGE, { age: this.age, name: this.member.name });
      this.age = "";
    },
  },
};
</script>

<style></style>
