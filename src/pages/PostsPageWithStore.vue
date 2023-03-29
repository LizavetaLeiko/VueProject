<template>
  <div> 
    <TextInput v-model:value="searchedPost" @update:model-value="setSearchedPost" style="width: 100%;" placeholder="Найти пост"/>
    <div class="app__btns">
      <DefaultBtn @click="showModal">Создать пост</DefaultBtn>
      <DefaultSelect v-model:value="selectedFilter" @update:model-value="setSelectedFilter" :options="selectedOptions"/>
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
        @click="setPage(pageN)"
        >
          {{ pageN }}
      </div>
    </div>
  </div>
</template>
<script>
  import PostForm from '@/components/PostForm.vue'
  import PostsList from '@/components/PostsList.vue'
  import { mapGetters, mapActions, mapMutations, mapState} from 'vuex'
  
  export default {
    components:{
      PostForm, PostsList, 
    },
    data(){
      return{
        modalIsOpen: false,
      }
    },
    methods:{
      ...mapMutations({
        setPage: 'post/setPage',
        setSearchedPost: 'post/setSearchedPost',
        setSelectedFilter: 'post/setSelectedFilter'
      }),
      ...mapActions({
        fetchPosts: 'post/fetchPosts'
      }),
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
    },
    mounted(){
      this.fetchPosts()
    },
    computed:{
      ...mapState({
        posts: state => state.post.posts,
        isPostsLoading: state => state.post.isPostsLoading,
        selectedFilter: state => state.post.selectedFilter,
        selectedOptions: state => state.post.selectedOptions,
        searchedPost: state => state.post.searchedPost,
        page: state => state.post.page,
        limit: state => state.post.limit,
        totalPages: state => state.post.totalPages,
      }),
      ...mapGetters({
        sortPosts: 'post/sortPosts',
        searchAndSortPost: 'post/searchAndSortPost'
      })
    },
    watch:{
      page(){
        this.fetchPosts()
      }
    }
  }
</script>
  
<style scoped>
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
  margin: 40px 0;
}
.app__page{
  padding: 5px 10px;
  border: 1px blue solid ;
}
.current_page{
  border: 2px blue solid ;
}
</style>