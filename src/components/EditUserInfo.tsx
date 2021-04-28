import { useState } from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { useMutation } from 'react-relay'
import styled from 'styled-components'
import { StyledButton, StyledField, StyledInputText } from './StyledComponents'
import type { HomePageUserInfoQueryResponse as UserQueryType } from './__generated__/HomePageUserInfoQuery.graphql'
import type { EditUserInfoMutation as MutationType } from './__generated__/EditUserInfoMutation.graphql'

const EditUserInfoMutation = graphql`
  mutation EditUserInfoMutation($name: String, $age: Int, $bio: String) {
    editUser(name: $name, age: $age, bio: $bio) {
      id
    }
  }
`
const EditUserInfo = ({
  data,
  setIsEditing,
}: {
  data: UserQueryType
  setIsEditing: (edit?: boolean) => void
}) => {
  const { user } = data
  const [nameValue, setNameValue] = useState(user.name)
  const [ageValue, setAgeValue] = useState(user.age)
  const [bioValue, setBioValue] = useState(user.bio)
  const [commit] = useMutation<MutationType>(EditUserInfoMutation)

  const handleClick = () => {
    commit({
      variables: {
        name: nameValue,
        age: ageValue,
        bio: bioValue,
      },
      onCompleted(data) {
        if (data.editUser?.id) setIsEditing(false)
      },
    })
  }

  return (
    <>
      <StyledField>
        <span>Name:</span>
        <StyledInputText
          onChange={(e) => setNameValue(e.target.value)}
          value={nameValue}
        />
      </StyledField>
      <StyledField>
        <span>Age:</span>
        <StyledInputText
          type='number'
          onChange={(e) => setAgeValue(+e.target.value)}
          value={ageValue || 0}
          min={1}
          max={100}
        />
      </StyledField>
      <StyledField>
        <span>Biography:</span>
        <StyledTextArea
          onChange={(e) => setBioValue(e.target.value)}
          value={bioValue || 'unknown'}
          maxLength={255}
          rows={5}
        />
      </StyledField>
      <StyledButton onClick={handleClick}>Save changes</StyledButton>
    </>
  )
}

const StyledTextArea = styled.textarea`
  font-size: 1.5rem;
  padding: 5px;
  margin-bottom: 8px;
  width: 450px;
  resize: none;
  &:focus {
    outline-color: cyan;
  }
`

export default EditUserInfo
