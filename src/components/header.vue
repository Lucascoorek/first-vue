<template>
  <div class="header">
    <h1>{{ msg }}</h1>
    <div @click="changeTitle">
      <p>Click this to change primitve prop passed to header and footer from App component</p>
      <h3>{{title}}</h3>
    </div>
  </div>
</template>

<script>
import { eventHub } from "../main";
export default {
  name: "Header",
  props: {
    msg: String,
    title: String
  },
  methods: {
    changeTitle() {
      this.title =
        this.title === "Great Family" ? "Very Great Family" : "Great Family";
      // this.$emit("titleChange", newTitle);
      eventHub.$emit("changeTitle", this.title);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-color: rgb(8, 45, 146);
}
h1 {
  margin: 0 0 40px 0;
  padding: 20px;
}
</style>
