const { APP_SECRET } = require('../utils')
const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')

const signup = async (parent, args, { prisma }) => {
  const password = await hash(args.password, 10)
  const user = await prisma.user.create({ data: { ...args, password } })
  const token = sign({ userId: user.id }, APP_SECRET)

  return { token, user }
}

const login = async (parent, args, { prisma }) => {
  const user = await prisma.user.findUnique({
    where: { email: args.email },
  })
  if (!user) throw new Error('No such user found')

  const valid = compare(args.password, user.password)
  if (!valid) throw new Error('Invalid password!')

  const token = sign({ userId: user.id }, APP_SECRET)
  return { token, user }
}

const addNote = async (parent, args, { userId, prisma }) => {
  return await prisma.note.create({
    data: { ...args, user: { connect: { id: userId } } },
  })
}

const deleteNote = async (parent, { id }, { userId, prisma }) => {
  if (!userId) throw new Error('Not authenticated')
  return await prisma.note.delete({
    where: { id: +id },
  })
}

const editUser = async (parent, args, { userId, prisma, pubsub }) => {
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { ...args },
  })
  pubsub.publish('UPDATE_USER', updatedUser)
  return updatedUser
}

module.exports = {
  signup,
  login,
  addNote,
  deleteNote,
  editUser,
}
