<template>
  <div class="footer">
    <h3>{{title}}</h3>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { eventHub } from "../main";

export default {
  name: "Footer",
  props: {
    msg: String,
    title: String
  },
  created() {
    eventHub.$on("changeTitle", data => (this.title = data));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  background-color: rgb(8, 45, 146);
  padding: 20px;
}
</style>
