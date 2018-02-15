const fetchConversations = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        id: 1,
        from_name: 'from',
        to_name: 'to',
        last_message: 'hey',
      },
      {
        id: 2,
        from_name: 'from2',
        to_name: 'to2',
        last_message: 'hey2',
      },
    ])
  }, 1000)
})

const fetchMessages = (cid) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          last_message: 'hey',
        }
      ])
    }, 1000)
  })
}

const fetchProduct = (id) => {
  return new Promise((resolve) => {
    console.log('[fetchProduct] in')
    setTimeout(() => {
      resolve(
        {
          id: id,
          name: id.toUpperCase(),
          price: '$' + Number(Math.random() * 1000).toFixed(2),
        }
      )
    }, 1000)
  })
}

export {
  fetchConversations,
  fetchMessages,
  fetchProduct,
}
