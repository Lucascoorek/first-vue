<template>
  <div id="app">
    <app-header msg="Vue app" v-on:titleChange="dataTitleChange($event)" />
    <app-main v-bind:family="family" />
    <app-footer msg="Copyright 2020" />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Main from "./components/main";
import Footer from "./components/footer";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-main": Main,
    "app-footer": Footer
  },
  data() {
    return {
      family: [
        { name: "Kasia", age: 37, show: false },
        { name: "Lukas", age: 38, show: false },
        { name: "Witek", age: 6, show: false },
        { name: "Bruno", age: 6, show: false }
      ],
      title: "Great Family"
    };
  },
  methods: {
    dataTitleChange(title) {
      this.title = title;
    }
  }
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
