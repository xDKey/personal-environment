const { PrismaClient } = require('.prisma/client')
const { ApolloServer, PubSub } = require('apollo-server')
const { typeDefs } = require('./schema')
const { getUserId } = require('./utils')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const User = require('./resolvers/User')
const Subscription = require('./resolvers/Subscription')

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
}

const prisma = new PrismaClient()
const pubsub = new PubSub()
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers,
  context: ({ req }) => ({
    ...req,
    prisma,
    pubsub,
    userId: req && req.headers.authorization ? getUserId(req) : null,
  }),
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
