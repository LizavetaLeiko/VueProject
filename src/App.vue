<template>
<div class="app"> 
  <PostForm @create="createPost"/>
  <PostsList v-bind:posts="posts"/>
</div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostsList from '@/components/PostsList.vue'


export default {
  components:{
    PostForm, PostsList
  },
  data(){
    return{
      posts: [
        {title: 'Пост номер 1', content: 'Описание поста номер 1'},
        {title: 'Пост номер 2', content: 'Описание поста номер 2'},
        {title: 'Пост номер 3', content: 'Описание поста номер 3'}
      ],
    }
  },
  methods:{
    createPost(post) {
      this.posts.push(post)
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>