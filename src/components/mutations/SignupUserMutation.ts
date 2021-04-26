import { graphql } from 'babel-plugin-relay/macro'
import { GraphQLTaggedNode } from 'relay-runtime'

export const SignupUserMutation = (): GraphQLTaggedNode => {
  return graphql`
    mutation SignupUserMutation(
      $name: String!
      $email: String!
      $password: String!
    ) {
      signup(name: $name, email: $email, password: $password) {
        token
        user {
          name
          id
        }
      }
    }
  `
}
