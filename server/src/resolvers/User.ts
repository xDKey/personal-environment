import Note from '../db/models/Note'
import UserModel from '../db/models/User'

const User = {
  notes: async (parent) => {
    const notes: Note[] = await UserModel.relatedQuery('notes').for(parent.id)
    return notes
  },
}

export default User
