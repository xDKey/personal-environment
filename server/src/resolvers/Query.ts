import Note from '../db/models/Note'
import User from '../db/models/User'

const user = async (parent, args, context) => {
  const user: User = await User.query().findById(context.userId)
  return user
}

const notes = async (parent, args, { userId }) => {
  const notes = await Note.query().where('userId', userId)
  return notes
}

export default {
  user,
  notes,
}
