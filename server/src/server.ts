import { ApolloServer, PubSub } from 'apollo-server'
import dbsetup from './db/dbsetup'
import typeDefs from './schema'
import { getUserId } from './utils'
import Mutation from './resolvers/Mutation'
import Query from './resolvers/Query'
import User from './resolvers/User'
import Subscription from './resolvers/Subscription'

dbsetup()

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
}

const pubsub = new PubSub()
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    ...req,
    pubsub,
    userId: req && req.headers.authorization ? getUserId(req) : null,
  }),
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
