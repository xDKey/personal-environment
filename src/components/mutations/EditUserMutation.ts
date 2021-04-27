import { graphql } from 'babel-plugin-relay/macro'
import { GraphQLTaggedNode } from 'relay-runtime'

export const EditUserMutation = (): GraphQLTaggedNode => {
  return graphql`
    mutation EditUserMutation($name: String, $age: Int, $bio: String) {
      editUser(name: $name, age: $age, bio: $bio) {
        id
      }
    }
  `
}
