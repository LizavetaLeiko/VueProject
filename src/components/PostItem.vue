<template>
  <div class="post"> 
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Название поста:</strong> {{post.title}}</div>
      <div><strong>Контент:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <DefaultBtn @click="$router.push(`/post/${post.id}`)">Открыть</DefaultBtn>
      <DefaultBtn @click="$emit('remove', post)">Удалить</DefaultBtn>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      post:{
        type: Object,
        required: true,
      },
    },
  }
</script>

<style scoped>
.post{
  padding: 15px;
  border: 2px blue solid;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
}
.post__btns{
  display: flex;
  gap: 10px;
  margin-right: 10px;
}
</style>