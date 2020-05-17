<template>
  <div class="tab-one">
    <h3>{{title}}</h3>
    <p>{{ msg }}</p>
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: "FirstTab",
  data() {
    return {
      title: "First Tab",
      msg: "This is some content from component one"
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
