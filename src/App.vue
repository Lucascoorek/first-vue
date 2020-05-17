<template>
  <div id="app">
    <app-header msg="Family App" v-on:titleChange="dataTitleChange($event)" />
    <app-main v-bind:family="family" />
    <TabList />
    <ShowScores/>
    <app-footer msg="Copyright 2020">
      <div slot="footer">
        <p>{{footerData}}</p>
      </div>
    </app-footer>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Main from "./components/main";
import Footer from "./components/footer";
import TabList from "./components/tab-component/tab-list";
import ShowScores from "./components/show-scores";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-main": Main,
    "app-footer": Footer,
    TabList,
    ShowScores
  },
  data() {
    return {
      family: [
        { name: "Kasia", age: 37, show: false },
        { name: "Lukas", age: 38, show: false },
        { name: "Witek", age: 6, show: false },
        { name: "Bruno", age: 6, show: false }
      ],
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
