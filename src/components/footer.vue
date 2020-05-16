<template>
  <div class="footer">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  background-color: rgb(8, 45, 146);
  padding: 20px;
}

</style>
