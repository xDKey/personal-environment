import { graphql } from 'babel-plugin-relay/macro'

const EditUserInfoMutation = graphql`
  mutation EditUserInfoMutation($name: String, $age: Int, $bio: String) {
    editUser(name: $name, age: $age, bio: $bio) {
      id
    }
  }
`

export default EditUserInfoMutation
