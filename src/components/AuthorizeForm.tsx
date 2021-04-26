import { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { StyledButton, StyledInputText } from './StyledComponents'

const AuthorizeForm = () => {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [nameValue, setNameValue] = useState('')
  const [isNewUser, setIsNewUser] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log('submit')
  }

  const nameInput = isNewUser && (
    <StyledInputText
      onChange={(e) => setNameValue(e.target.value)}
      type='text'
      value={nameValue}
      placeholder='Enter your name'
      required={true}
    />
  )

  const Title = () => {
    const [firstSpan, secondSpan] = isNewUser
      ? ['log in', 'register']
      : ['register', 'log in']
    return (
      <h1>
        Please {firstSpan} or
        <ChangeToNewcomer onClick={() => setIsNewUser(!isNewUser)}>
          {' '}
          {secondSpan}
        </ChangeToNewcomer>
      </h1>
    )
  }

  return (
    <>
      <Title />
      <StyledForm onSubmit={handleSubmit}>
        {nameInput}
        <StyledInputText
          onChange={(e) => setEmailValue(e.target.value)}
          type='email'
          value={emailValue}
          placeholder='Enter your email'
          required={true}
        />
        <StyledInputText
          onChange={(e) => setPasswordValue(e.target.value)}
          type='password'
          value={passwordValue}
          placeholder='Enter your password'
          required={true}
        />
        <StyledButton type='submit'>Autorize</StyledButton>
      </StyledForm>
    </>
  )
}

const ChangeToNewcomer = styled.span`
  color: cyan;
  cursor: pointer;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

export default AuthorizeForm
