<template>
  <div class="single-post">
    <p v-if="loading">Loading...</p>
    <article v-else>
    <h1>{{post.title | cut}}</h1>
    <p>this is a single post id: {{post.id}}</p>
    <p>{{post.body}}</p>
    </article>
  </div>
</template>

<script>
export default {
  name: "SinglePost",
  data(){
    return {
      id: this.$route.params.id,
      post: {},
      loading: true,
    }
  },
  filters: {
    cut(val){
      if(!val) return ''
      return val.slice(0, 20);
    }
  },
  created() {
    this.$http.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
    .then(({data}) => {
      this.post = data;
      this.loading = false;
      })
  }
}
</script>

<style scoped>
.single-post{
  flex:1;
}
</style>  