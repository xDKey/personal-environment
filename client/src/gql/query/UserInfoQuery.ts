import { graphql } from 'babel-plugin-relay/macro'

const UserInfoQuery = graphql`
  query UserInfoQuery {
    user {
      id
      name
      email
      bio
      age
    }
  }
`
export default UserInfoQuery