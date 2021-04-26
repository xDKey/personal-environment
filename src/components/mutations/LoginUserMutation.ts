import { graphql } from 'babel-plugin-relay/macro'
import { GraphQLTaggedNode } from 'relay-runtime'

export const LoginUserMutation = (): GraphQLTaggedNode => {
  return graphql`
    mutation LoginUserMutation($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        user {
          name
          id
        }
      }
    }
  `
}
