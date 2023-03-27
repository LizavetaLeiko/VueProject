<template>
  <div class="modal" v-if="shown" @click="hideModal">
    <div class="modal__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    props:{
      shown:{
        type: Boolean,
        default: false,
        required: true
      }
    },
    methods:{
      hideModal(){
        this.$emit('update:shown', false)
      }
    }
  }
</script>

<style scoped>
.modal{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
}
.modal__content{
  padding: 20px;
  margin: auto;
  background-color: #fff;
  border-radius: 10px;
}
</style>