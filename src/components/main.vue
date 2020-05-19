<template>
  <div class="main">
    <h3>The Family</h3>
    <ul>
      <li
        v-for="member in surname"
        v-on:click="member.show = !member.show"
        :key="member.name"
      >
        <p>{{ member.name }} {{ member.surname }}</p>
        <div>
          <p>Click to show age</p>
          <p>
            The age is:
            <span v-show="member.show">{{ member.age }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
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
