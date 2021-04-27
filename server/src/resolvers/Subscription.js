const updatedUser = {
  subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('UPDATE_USER'),
  resolve: (payload) => payload,
}

const changedNotes = {
  subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('CHANGE_NOTES'),
  resolve: (payload) => payload,
}

module.exports = {
  updatedUser,
  changedNotes,
}
