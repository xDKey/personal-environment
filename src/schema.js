const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    notes: [Note]
    profile: [Profile]
  }

  type Note {
    id: ID!
    title: String!
    description: String
    user: User
  }

  type Profile {
    id: ID!
    bio: String
    age: String
    user: User
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    signup(name: String!, email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    addNote(title: String!, description: String): Note
  }

  type AuthPayload {
    token: String
    user: User
  }
`
module.exports = {
  typeDefs,
}
