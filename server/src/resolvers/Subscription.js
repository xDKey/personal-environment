const updateUserSubscribe = (parent, args, { pubsub }) => {
  return pubsub.asyncIterator('UPDATE_USER')
}

const updatedUser = {
  subscribe: updateUserSubscribe,
  resolve: (payload) => payload,
}

module.exports = {
  updatedUser,
}
