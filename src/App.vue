<template>
<div class="app"> 
  <TextInput v-model="searchedPost" placeholder="Найти пост"/>
  <div class="app__btns">
    <DefaultBtn @click="showModal">Создать пост</DefaultBtn>
    <DefaultSelect v-model="selectedFilter" :options="selectedOptions"/>
  </div>
  <Modal v-model:shown="modalIsOpen">
    <PostForm @create="createPost" />
  </Modal>
  <PostsList v-bind:posts="searchAndSortPost" @remove="removePost" v-if="!isPostsLoading"/>
  <div v-else>Загрузка постов...</div>
  <div class="app__pages">
    <div 
      v-for="pageN in totalPages" 
      :key="pageN"
      class="app__page" 
      :class="{'current_page': pageN === page }"
      @click="changePage(pageN)"
      >
        {{ pageN }}
    </div>
  </div>
</div>
</template>
<script>
import PostForm from '@/components/PostForm.vue'
import PostsList from '@/components/PostsList.vue'
import axios from 'axios'

export default {
  components:{
    PostForm, PostsList, 
  },
  data(){
    return{
      posts: [],
      modalIsOpen: false,
      isPostsLoading: false,
      selectedFilter: '',
      selectedOptions:[
        {value: 'title', name: 'По заголовку'},
        {value: 'body', name: 'По контенту'}
      ],
      searchedPost: '',
      page: 1,
      limit: 10,
      totalPages: 1,
    }
  },
  methods:{
    createPost(post) {
      this.posts.push(post)
      this.modalIsOpen = false
    },
    removePost(post){
      this.posts = this.posts.filter(item => item.id !== post.id)
    },
    showModal(){
      this.modalIsOpen = true
    },
    async fetchPosts (){
      this.isPostsLoading = true
      try{
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', { params: 
          { _page: this.page, _limit: this.limit}
        });
        this.posts = responce.data;
        this.totalPages = Math.ceil(responce.headers['x-total-count'] / this.limit) 
      } catch(e){
      } finally{
        this.isPostsLoading = false
      }
    },
    changePage(pageN){
      this.page = pageN
    }
  },
  mounted(){
    this.fetchPosts()
  },
  computed:{
    sortPosts(){
      return [...this.posts].sort((post1, post2)=>post1[this.selectedFilter]?.localeCompare(post2[this.selectedFilter]))
    },
    searchAndSortPost(){
      return this.sortPosts.filter( post => post.title.includes(this.searchedPost))
    }
  },
  watch:{
    page(){
      this.fetchPosts()
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
.app__btns{
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 20px;
}
.app__pages{
  display: flex;
  justify-content: center;
  gap: 15px;
}
.app__page{
  padding: 5px 10px;
  border: 1px blue solid ;
}
.current_page{
  border: 2px blue solid ;
}
</style>