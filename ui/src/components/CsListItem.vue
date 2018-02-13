<template lang="pug">
  li
    strong {{conversation.from_name}}:
      | &nbsp;
    span @{{conversation.to_name}}
      | &nbsp;
    em {{conversation.last_message}}
</template>

<script>
export default {
  name: 'CsListItem',
  props: {
    conversation: {
      type: Object,
    }
  }
}
</script>
