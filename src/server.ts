import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { context } from './context'
import { buildSchema, Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
class Note {
  @Field()
  

}

@ObjectType()
class User {
  @Field(type => ID)
  id!: number

  @Field()
  name!: string

  @Field()
  email!: string

  @Field()
  password!: string

  @Field(type => [Note], {nullable: true})
  Notes?: [Note] | null
}

// model Note {
//   id          Int      @id @default(autoincrement())
//   createdAt   DateTime @default(now())
//   title       String
//   description String?
//   user        User     @relation(fields: [userId], references: [id])
//   userId      Int
// }

const schema = await buildSchema({
  resolvers: []
})

const server = new ApolloServer({
  schema,
  context: context
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})


// const typeDefs = gql`
//   type User {
//     id: ID!
//     name: String!
//     email: String!
//     password: String!
//     notes: [Note]
//   }

//   type Note {
//     id: ID!
//     createdAt: String!
//     title: String!
//     description: String
//     user: User
//   }

//   type Query {
//     users: [User!]!
//   }
// `

// const resolvers = {
//   Query: {
//     users: async (parent: any, args: any, context: any) => {
//       return context.prisma.user.findMany()
//     },
//   },
// }

