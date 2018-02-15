<template lang="pug">
  div
    h1 Bose
    h4 Product: {{ $route.params.product_id }}
    br
    br

    BoseProductItem(:product='product')

    br
    hr
    h6 Compare with similar items
    router-link(to='/bose/soundlink-mini-2') soundlink mini 2
    hr
    router-link(to='/') Back to main
</template>

<script>
import { mapGetters } from 'vuex'
import BoseProductItem from '@/components/BoseProductItem'

export default {
  name: 'BoseView',
  components: {
    BoseProductItem,
  },
  computed: {
    ...mapGetters({
      product: 'product',
    })
  },
  mounted () {
    this.$store.dispatch('getProduct', {
      id: this.$route.params.product_id,
    })
  },
  watch: {
    '$route' (to, from) {
      this.$store.dispatch('getProduct', {
        id: this.$route.params.product_id,
      })
    }
  }
}
</script>
