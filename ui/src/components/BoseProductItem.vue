<template lang="pug">
  div.card
    transition(name='fade' mode='out-in')
      .card-body(v-if='!product.id' key='loading')
        h5.text-muted Loading...
      .card-body(v-if='product.id' v-bind:key='"loaded"+product.id')
        h5.card-title name: {{product.name}}
        h6.card-subtitle price: {{product.price}}
        p id: {{product.id}}
</template>

<style lang="postcss" scoped>
.card {
  height: 150px;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
}
</style>

<script>

export default {
  name: 'BoseProductItem',
  components: {
    // CsListItem,
  },
  props: {
    product: {
      type: Object,
    }
  },
}
</script>
