<template>
  <div class="tab-second">
    <h3>{{title}}</h3>
    <p>{{ msg }}</p>
    <slot name="component"></slot>
  </div>
</template>

<script>
export default {
  name: "SecondTab",
  data() {
    return {
      title: "Mama Tab",
      msg: "This is some content from component two"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-second {
  margin: 0 20px;
  border: 1px solid #000;
}
</style>
