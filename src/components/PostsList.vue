<template>
  <div v-if="posts.length > 0"> 
    <h3>Список постов</h3>
    <transition-group name="list">
      <PostItem v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)"/>
    </transition-group>
  </div>
  <h2 v-else>Список постов пуст</h2>
</template>

<script>
import PostItem from "@/components/PostItem";

  export default {
    components:{
      PostItem
    },
    props:{
      posts:{
        type: Array,
        required: true,
      },
    }
  }
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
.list-move {
  transition: transform 0.4s ease;
}
</style>