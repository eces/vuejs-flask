<template lang="pug">
  div
    h1 Amazon
    router-link(to='/') Back to main
</template>

<script>
export default {
  name: 'AmazonView',
  components: {
    // CsList,
  },
//   computed: {
//     ...mapGetters({
//       conversations: 'conversations',
//     })
//   },
//   mounted () {
//     this.$store.dispatch('getConversations')
//   }
}
</script>
