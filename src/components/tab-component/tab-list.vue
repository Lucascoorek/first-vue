<template>
  <div class="tab-list">
    <h3>{{title}}</h3>
    <div class="tab-container">
      <button @click="component='first-tab'">First-tab</button>
      <button @click="component='second-tab'">Second-tab</button>
      <keep-alive>
        <component v-bind:is="component"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import FirstTab from "./tab-first";
import SecondTab from "./tab-second";

export default {
  name: "TabList",
  components: {
    "first-tab": FirstTab,
    "second-tab": SecondTab
  },
  props: {},
  data() {
    return {
      title: "Tab List Component",
      component: "first-tab"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-list {
  background-color: rgb(175, 201, 216);
  color: #000;
  padding: 20px;
}
.tab-container {
  border: 1px solid #000;
  margin: 20px auto;
  width: 100%;
  height: 150px;
}
</style>
