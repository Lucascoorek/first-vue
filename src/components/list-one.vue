<template>
  <div class="list-one">
    <h1>List One</h1>
    <ul>
      <li v-for="(member, i) in family" :key="i">
        <h2>{{member.name}}</h2>
        <p>{{member.age}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
name: "ListOne",
props: {
  family: {
    type: Array,
    required: true,
  }
}
}
</script>

<style scoped>
.list-one {
  background-color: rgb(181, 181, 182);
  padding: 20px;
}
ul{
  list-style-type: none;
}
li{
  background-color:rgb(70, 116, 214);
  padding: 10px 20px;
  margin: 20px;
}
</style>