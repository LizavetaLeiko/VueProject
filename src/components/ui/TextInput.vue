<template>
  <input type="text" class="input" @input="updateInput" :value="modelValue">
</template>

<script>

  export default {
    name: 'TextInput',
    props:{
      modelValue: [ String, Number]
    },
    methods:{
      updateInput(e){
        this.$emit('update:modelValue', e.target.value)
      }
    }
  }
</script>

<style scoped>
.input{
  padding: 15px;
  border: 1px blue solid;
  margin-bottom: 10px;
  width: 93%;
}
</style>