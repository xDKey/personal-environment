const { PrismaClient } = require('.prisma/client')
const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema')
const { getUserId } = require('./utils')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')

const resolvers = {
  Query,
  Mutation
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
