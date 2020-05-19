<template>
  <div class="header">
     <nav>
      <ul>
        <li><router-link to="/" exact >Home</router-link></li>
        <li><router-link to="/scores" exact >Scores</router-link></li>
        <li><router-link to="/tab-list" exact >Tab List</router-link></li>
        <li><router-link to="/list-one" exact >List One</router-link></li>
      </ul>
    </nav>
    <h1>{{ msg }}</h1>
    <p>Powered by Vue.js</p>
    <div class="click-container" @click="changeTitle">
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
    msg: String
    // title: String
  },
  data() {
    return {
      title: "Great Family"
    };
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
nav ul{
  list-style-type: none;
  display: flex;
}
nav li{
  margin: 10px 20px;
}
nav a{
color: #ddd;
text-decoration: none;
}
nav a.router-link-active{
  color: red;
}
h1 {
  margin: 0 0 40px 0;
  padding: 20px;
}
.click-container {
  cursor: pointer;
  max-width: 400px;
  border: 1px solid #ddd;
  margin: 20px auto;
}
</style>
