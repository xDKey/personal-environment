import { UserInfoQueryResponse } from '../gql/query/__generated__/UserInfoQuery.graphql'
import { StyledField } from './StyledComponents'

const DisplayUserInfo = ({ data }: { data: UserInfoQueryResponse }) => {
  const { user } = data
  return (
    <>
      <StyledField>
        <span>Email:</span> {user.email}
      </StyledField>
      <StyledField>
        <span>Name:</span> {user.name}
      </StyledField>
      <StyledField>
        <span>Age:</span> {user.age || 'unknown'}
      </StyledField>
      <StyledField>
        <span>Biography:</span> {user.bio || 'unknown'}
      </StyledField>
    </>
  )
}

export default DisplayUserInfo
