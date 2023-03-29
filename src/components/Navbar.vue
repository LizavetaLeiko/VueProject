<template>
  <div class="navbar"> 
    <RouterLink to="/" class="title">Vue3</RouterLink>
    <div class="btns">
      <DefaultBtn @click="$router.push('/posts')">Посты</DefaultBtn>
      <DefaultBtn @click="$router.push('/store')">Посты из стора</DefaultBtn>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 20px;
  background-color: lightcyan;
  margin-bottom: 30px;
}
.title{
  font-size: 32px;
  color: blue;
  cursor: pointer;
  text-decoration: none;
}
.btns{
  display: flex;
  gap: 15px;
}
</style>