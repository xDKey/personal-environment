const { PrismaClient } = require('.prisma/client')
const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    notes: [Note]
  }

  type Note {
    id: ID!
    createdAt: String!
    title: String!
    description: String
    user: User
  }

  type Query {
    users: [User!]!
  }
`

const resolvers = {
  Query: {
    users: async (parent, args, { prisma }) => {
      return prisma.user.findMany()
    },
  },
}

const prisma = new PrismaClient()
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
  },
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
