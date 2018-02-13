<template lang="pug">
  ul
    CsListItem(
      v-for='conversation in conversations'
      :key='conversation.id'
      :conversation='conversation'
    )
</template>

<script>
import CsListItem from './CsListItem'

export default {
  name: 'CsList',
  components: {
    CsListItem,
  },
  props: {
    conversations: {
      type: Array,
    }
  },
}
</script>
