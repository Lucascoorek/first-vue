<template>
  <div class="show-scores">
    <h3>{{title}}</h3>
    <input type="text" placeholder="Search the tiles..." v-model="search">
    <ul>
      <li v-for="score in filterdTitles" :key="score.userId + Math.random()">
        <h3>
        {{score.title}}
        </h3>
        <p>{{score.body | short}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import filterdTitless from '../mixins/filteredTitles';

export default {
  name: "ShowScores",
  data() {
    return {
      title: "Data fetched from API when component is created",
      scores: [],
      search: '',
    };
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts/')
    .then(data => {
      this.scores = data.data.slice(0, 10);
      })
  },
  filters: {
    short(val){
      if (!val) return '';
      return `${val.slice(0, 50)}...`
      
    }
  },
  mixins: [filterdTitless]
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
  background-color:rgb(161, 138, 161);
  padding: 10px 20px;
  margin: 20px;
}
</style>
