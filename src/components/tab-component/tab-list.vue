<template>
  <div class="tab-list">
    <h3>{{title}}</h3>
    <div class="tab-container">
      <button v-focus @click="component='tata'">About Tata</button>
      <button @click="component='mama'">About Mama</button>
      <keep-alive>
        <component v-bind:is="component"></component>
      </keep-alive>
      <slot name="component">
        <form @submit="submit" >
        <label for="text">Rate <span style="color: red;">{{component}}</span> from 1-10</label>
        <select id="text" v-model.lazy="score[component]">
          <option v-for="(score, i) in scoresArray" :key="i" >{{score}}</option>
        </select>
        <input type="submit" value="Submit">
        <p style="color: red;" v-if="error">Need to give a score to Tata & Mama</p>
        </form> 
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
        mama: 0,
        tata: 0,
      },
      scoresArray: [1,2,3,4,5,6,7,8,9,10],
      error: false,
    };
  },
  methods: {
    submit(e){
      e.preventDefault();
      if(this.score.mama === 0 || this.score.tata === 0){
        this.error = true;
        return; 
      }
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'score',
          body: this.score,
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(res => console.log(res.data))
      this.error= false;
    }
  },
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

}
form label,select, input {
  display: block;
  margin: 10px auto;
}

</style>
