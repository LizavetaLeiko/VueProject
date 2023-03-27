<template>
  <div>
    <form @submit.prevent>
      <h4 class="form_title">Создайте пост</h4>
      <TextInput v-model="post.title" type="text" placeholder="Название"/>
      <TextInput v-model="post.content" type="text" placeholder="Описание"/>
      <DefaultBtn @click="createPost" style="align-self: flex-end;">Создать</DefaultBtn>
    </form>
  </div>
</template>

<script>
import DefaultBtn from './ui/DefaultBtn.vue'

export default {
    data() {
        return {
            post: {
                title: "",
                body: "",
            },
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: ""
            };
        },
    },
    components: { DefaultBtn }
}
</script>

<style scoped>
.form_title{
  font-size: 28px;
  margin: 10px 0 15px;
}

form{
  margin-bottom: 20px;
}
</style>
