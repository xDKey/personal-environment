const changedNotes = {
  subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('CHANGE_NOTES'),
  resolve: (payload) => payload,
}

export default {
  changedNotes
}
