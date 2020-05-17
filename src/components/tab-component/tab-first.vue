<template>
  <div class="tab-one">
    <h3>{{title}}</h3>
    <p>{{ msg }}</p>
    <slot name="component"></slot>
  </div>
</template>

<script>
export default {
  name: "FirstTab",
  data() {
    return {
      title: "Tata",
      msg: "Tata's name is Lukas. He is web developer"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-one {
  margin: 0 20px;
  border: 1px solid #000;
}
</style>
