const { PrismaClient } = require('.prisma/client')
const { ApolloServer } = require('apollo-server')
const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { typeDefs } = require('./schema')
const { APP_SECRET, getUserId } = require('./utils')

const resolvers = {
  Query: {
    users: async (parent, args, { prisma }) => {
      return prisma.user.findMany()
    },
  },
  Mutation: {
    signup: async (parent, args, { prisma }) => {
      const password = await hash(args.password, 10)
      const user = await prisma.user.create({ data: { ...args, password } })
      const token = sign({ userId: user.id }, APP_SECRET)

      return { token, user }
    },
    login: async (parent, args, { prisma }) => {
      const user = await prisma.user.findUnique({
        where: { email: args.email },
      })
      if (!user) throw new Error('No such user found')

      const valid = compare(args.password, user.password)
      if (!valid) throw new Error('Invalid password!')

      const token = sign({ userId: user.id }, APP_SECRET)
      return { token, user }
    },
    addNote: async (parent, args, { userId, prisma }) => {
      return await prisma.note.create({
        data: { ...args, user: { connect: { id: userId } } },
      })
    },
  },
}

const prisma = new PrismaClient()
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers,
  context: ({ req }) => ({
    ...req,
    prisma,
    userId: req && req.headers.authorization ? getUserId(req) : null,
  }),
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
