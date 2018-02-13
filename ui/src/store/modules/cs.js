import {
  fetchConversations,
} from '@/api'

const state = {
  conversations: [],
}

const actions = {
  getConversations: (ctx) => {
    fetchConversations
      .then((response) => {
        ctx.commit('CS_UPDATED', response)
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

const mutations = {
  CS_UPDATED: (state, conversations) => {
    state.conversations = conversations
  }
}

const getters = {
  conversations: state => state.conversations
}

export default {
  state,
  getters,
  actions,
  mutations,
}
