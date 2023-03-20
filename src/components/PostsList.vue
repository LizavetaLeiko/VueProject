<template>
  <div class="post" v-for="post in posts"> 
    <div><strong>Название поста:</strong> {{post.title}}</div>
    <div><strong>Контент:</strong> {{ post.content }}</div>
  </div>
</template>

<script>
  export default {
    props:{
      posts:{
        type: Array,
        required: true,
      },
    }
  }
</script>

<style scoped>
.post{
  padding: 15px;
  border: 2px blue solid;
  margin-bottom: 10px;
}
</style>