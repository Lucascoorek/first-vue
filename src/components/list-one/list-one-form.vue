<template>
  <div>
    <label>Change {{ member.name }}'s age </label>
    <input type="text" v-model="age" />
  </div>
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
  computed: {
    age: {
      get() {
        const index = this.$store.state.family.findIndex(
          (member) => member.name === this.member.name
        );
        return this.$store.state.family[index].age;
      },
      set(value) {
        this.$store.commit(CHANGE_AGE, { age: value, name: this.member.name });
      },
    },
  },
};
</script>

<style></style>
