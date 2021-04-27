import { useState } from 'react'
import styled from 'styled-components'
import { StyledField, StyledInputText } from './StyledComponents'
import type { HomePageUserInfoQueryResponse as UserType } from './__generated__/HomePageUserInfoQuery.graphql'


const EditUserInfo = ({ data }: { data: UserType }) => {
  const { user } = data
  const [nameValue, setNameValue] = useState(user.name)
  const [ageValue, setAgeValue] = useState(user.age)
  const [bioValue, setBioValue] = useState(user.bio)

  return (
    <>
      <StyledField>
        <span>Name:</span>{' '}
        <StyledInputText
          onChange={(e) => setNameValue(e.target.value)}
          value={nameValue}
        />
      </StyledField>
      <StyledField>
        <span>Age:</span>{' '}
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
