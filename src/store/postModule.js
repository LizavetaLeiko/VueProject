import axios from 'axios'

const postModule ={
  state:()=>({
    posts: [],
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
  }),
  getters:{
    sortPosts(state){
      return [...state.posts].sort((post1, post2)=>post1[state.selectedFilter]?.localeCompare(post2[state.selectedFilter]))
    },
    searchAndSortPost(state, getters){
      return getters.sortPosts.filter( post => post.title.includes(state.searchedPost))
    }
  },
  mutations:{
    setPosts(state, posts){
      state.posts = posts
    },
    setIsPostsLoading(state, isPostsLoading){
      state.isPostsLoading = isPostsLoading
    },
    setSelectedFilter(state, selectedFilter){
      state.selectedFilter = selectedFilter
    },
    setSearchedPost(state, searchedPost){
      state.searchedPost = searchedPost
    },
    setPage(state, page){
      state.page = page
    },
    setLimit(state, limit){
      state.limit = limit
    },
    setTotalPages(state, totalPages){
      state.totalPages = totalPages
    },
  },
  actions:{
    async fetchPosts ({ state, commit}){
      commit('setIsPostsLoading', true) 
      try{
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', { params: 
          { _page: state.page, _limit: state.limit}
        });
        commit('setPosts', responce.data);
        commit('setTotalPages', Math.ceil(responce.headers['x-total-count'] / state.limit));
      } catch(e){
        console.log(e)
      } finally{
        commit('setIsPostsLoading', false) 
      }
    },
  },
  namespaced: true
}

export default postModule