import {
  fetchProduct,
} from '@/api'

const state = {
  product: {},
}

const actions = {
  getProduct: (ctx, product) => {
    ctx.commit('CLEAR')
    fetchProduct(product.id)
      .then((response) => {
        ctx.commit('ID_UPDATED', response)
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

const mutations = {
  CLEAR: (state) => {
    state.product = {}
  },
  ID_UPDATED: (state, product) => {
    state.product = product
  }
}

const getters = {
  product: state => state.product
}

export default {
  state,
  getters,
  actions,
  mutations,
}
