import { StyledField } from './StyledComponents'
import type { HomePageUserInfoQueryResponse as UserType } from './__generated__/HomePageUserInfoQuery.graphql'

const DisplayUserInfo = ({ data }: { data: UserType }) => {
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
