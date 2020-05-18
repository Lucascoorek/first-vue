<template>
  <div class="show-scores">
    <h3>{{title}}</h3>
    <ul>
      <li v-for="score in scores" :key="score.userId + Math.random()">{{score.title}}</li>
    </ul>
  </div>
</template>

<script>


export default {
  name: "ShowScores",
  data() {
    return {
      title: "Data fetched from API when component is created",
      scores: [],
    };
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts/')
    .then(data => {
      this.scores = data.data.slice(0, 10);
      })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show-scores {
  background-color: rgb(168, 11, 168);
  padding: 20px;
}
ul{
  list-style-type: none;
}
li{
  padding: 10px 20px;
}
</style>
