import { graphql } from 'babel-plugin-relay/macro'
import { useMutation } from 'react-relay'

export const useConditionalMutationHook = (isNewUser: boolean) => {
  const [commitLogin] = useMutation(graphql`
    mutation useConditionalMutationHookLoginMutation($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        user {
          name
          id
        }
      }
    }
  `)
  const [commitSignup] = useMutation(graphql`
    mutation useConditionalMutationHookMutation(
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
  `)

  return isNewUser ? commitSignup : commitLogin
}
