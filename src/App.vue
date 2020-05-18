<template>
  <div id="app">
    <app-header msg="Family App" v-on:titleChange="dataTitleChange($event)" />
    <router-view></router-view>
    <app-footer msg="Copyright 2020">
      <div slot="footer">
        <p>{{footerData}}</p>
      </div>
    </app-footer>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer,

  },
  data() {
    return {
      title: "Great Family",
      footerData: "Data from parent"
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
  min-height: 100vh;
}
</style>
