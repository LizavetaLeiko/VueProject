<template>
  <select @change="changeOption" class="select" >
    <option value="">Выберите фильтр</option>
    <option 
      :value="option.value" 
      :key="option.value" 
      v-for="option in options"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>

  export default {
    name: 'DefaultSelect',
    props:{
      modelValue: {
        type: String
      },
      options: {
        type: Array,
        default: () => []
      }
    },
    methods:{
      changeOption(e){
        this.$emit('update:modelValue', e.target.value)
      }
    }
  }
</script>

<style scoped>
.select{
  margin: 10px 0;
}
</style>