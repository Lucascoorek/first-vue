<template>
  <div class="tab-list">
    <h3>{{title}}</h3>
    <div class="tab-container">
      <button @click="component='tata'">About Tata</button>
      <button @click="component='mama'">About Mama</button>
      <keep-alive>
        <component v-bind:is="component"></component>
      </keep-alive>
      <slot name="component">
        <label for="text">Rate {{component}} from 0-10</label>
        <input id="text" type="text" v-model.lazy="score[component]" />
      </slot>
    </div>
  </div>
</template>

<script>
import FirstTab from "./tab-first";
import SecondTab from "./tab-second";

export default {
  name: "TabList",
  components: {
    tata: FirstTab,
    mama: SecondTab
  },
  props: {},
  data() {
    return {
      title: "Tab List Component",
      component: "mama",
      score: {
        mama: "",
        tata: ""
      }
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
  margin: 20px auto;
  width: 100%;
  height: 150px;
}
</style>
