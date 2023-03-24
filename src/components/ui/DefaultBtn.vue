<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>

  export default {
    name: 'DefaultBtn'
  }
</script>

<style scoped>
.btn{
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
}
</style>