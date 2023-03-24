<template>
  <div class="post"> 
    <div>
      <div><strong>Название поста:</strong> {{post.title}}</div>
      <div><strong>Контент:</strong> {{ post.content }}</div>
    </div>
    <div class="post__btns">
      <DefaultBtn>Удалить</DefaultBtn>
    </div>
  </div>
</template>

<script>
import DefaultBtn from './ui/DefaultBtn.vue'
  export default {
    props:{
      post:{
        type: Object,
        required: true,
      },
    },
    components:{
      DefaultBtn
    }
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
</style>