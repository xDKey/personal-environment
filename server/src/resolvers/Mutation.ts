import { APP_SECRET } from '../utils'
import { hash, compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import User from '../db/models/User'
import Note from '../db/models/Note'

const signup = async (parent, args) => {
  const password = await hash(args.password, 10)
  const user = await User.query().insert({
    ...args,
    password,
  })
  const token = sign({ userId: user.id }, APP_SECRET)

  return { token, user }
}

const login = async (parent, args) => {
  const user = await User.query().where('email', args.email).first()

  if (!user) throw new Error('No such user found')

  const valid = await compare(args.password, user.password)
  if (!valid) throw new Error('Invalid password!')

  const token = sign({ userId: user.id }, APP_SECRET)
  return { token, user }
}

const addNote = async (parent, args, { userId, pubsub }) => {
  const newNote = await Note.query().insert({
    ...args,
    userId,
  })

  pubsub.publish('CHANGE_NOTES', newNote)
  return newNote
}

const deleteNote = async (parent, { id }, { userId, pubsub }) => {
  if (!userId) throw new Error('Not authenticated')

  const deletedNote = await Note.query().deleteById(id)

  pubsub.publish('CHANGE_NOTES', deletedNote)
  return deletedNote
}

const editUser = async (parent, args, { userId }) => {
  const updatedUser = await User.query()
    .findById(userId)
    .patch({ ...args })

  return updatedUser
}

export default {
  signup,
  login,
  addNote,
  deleteNote,
  editUser,
}
