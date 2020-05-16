<template>
  <div class="main">
    <h3>The Family</h3>
    <ul>
      <li v-for="member in family" v-on:click="member.show = !member.show" :key="member.name">
        <p>{{member.name}}</p>
        <div>
          <p>Click to show age</p>
          <p>
            The age is:
            <span v-show="member.show">{{member.age}}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {
    family: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding: 20px;
  flex-grow: 1;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
li {
  flex-basis: 300px;
  border: 1px solid #ddd;
  margin: 20px;
}
</style>
