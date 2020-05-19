<template>
  <div class="main">
    <h3>The Family</h3>
    <ul>
      <li
        v-for="member in surname"
        :key="member.name"
        @click="decreaseOne(member.name)"
      >
        <p>{{ member.name }} {{ member.surname }}</p>
        <div>
          <p>Click to show age</p>
          <p>
            The age is:
            <span>{{ member.age }}</span>
          </p>
        </div>
      </li>
    </ul>
    <button @click="decrease">Decrease age of all member by 3 year</button>
  </div>
</template>

<script>
import { DECREASE_AGE, DECREASE_ONE } from "../store/mutation-types";
export default {
  name: "Main",
  computed: {
    family() {
      return this.$store.state.family;
    },
    surname() {
      return this.$store.getters.addSurname;
    },
  },
  methods: {
    decrease() {
      this.$store.commit({
        type: DECREASE_AGE,
        amount: 3,
      });
    },
    decreaseOne(name) {
      this.$store.commit({
        type: DECREASE_ONE,
        name,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding: 20px;
  flex: 1;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
li {
  cursor: pointer;
  flex-basis: 300px;
  border: 1px solid #ddd;
  margin: 20px;
}
</style>
