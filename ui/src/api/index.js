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

export {
  fetchConversations,
  fetchMessages,
}
