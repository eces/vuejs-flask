<template lang="pug">
  div
    h1 Home
    CsList(
      :conversations='conversations'
    )
</template>

<script>
import { mapGetters } from 'vuex'
import CsList from '@/components/CsList'

export default {
  name: 'HomeView',
  components: {
    CsList,
  },
  computed: {
    ...mapGetters({
      conversations: 'conversations',
    })
  },
  mounted () {
    this.$store.dispatch('getConversations')
  }
}
</script>
