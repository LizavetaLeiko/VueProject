<template>
  <div>
    <form @submit.prevent>
      <h4 class="form_title">Создайте пост</h4>
      <input v-model="post.title" class="input" type="text" placeholder="Название">
      <input v-model="post.content" class="input" type="text" placeholder="Описание">
      <button class="form_btn" @click='createPost'>Создать</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      post: {
        title: '', 
        content: '',
      },
    }
  },
  methods:{
    createPost(){
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        content: ''
      }
    },
  }
}
</script>

<style scoped>
.input{
  padding: 15px;
  border: 1px blue solid;
  margin-bottom: 10px;
  width: 100%;
}

.form_title{
  font-size: 28px;
  margin: 10px 0 15px;
}

.form_btn{
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
}

form{
  margin-bottom: 20px;
}
</style>
