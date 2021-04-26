import { FormEvent, useState } from 'react'
import { useMutation } from 'react-relay'
import styled from 'styled-components'
import { StyledButton, StyledInputText } from './StyledComponents'
import { LoginUserMutation } from './mutations/LoginUserMutation'
import { SignupUserMutation } from './mutations/SignupUserMutation'

const useConditionalHook = (isNewUser: boolean) => {
  const [commitLogin] = useMutation(LoginUserMutation())
  const [commitSignup] = useMutation(SignupUserMutation())

  return isNewUser ? commitSignup : commitLogin
}

const AuthorizeForm = () => {
  const [isNewUser, setIsNewUser] = useState(false)
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [nameValue, setNameValue] = useState('')
  const [isAuthorized, setIsAuthorized] = useState(false)
  const commit = useConditionalHook(isNewUser)
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    commit({
      variables: {
        name: nameValue,
        email: emailValue,
        password: passwordValue,
      },
      onCompleted(data: any) {
        let response
        if (isNewUser) response = data.signup
        if (!isNewUser) response = data.login
        if (response) {
          localStorage.setItem('token', response.token)
          localStorage.setItem('userName', response.user.name)
          setIsAuthorized(true)
        }
      },
    })
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
    const [firstSpan, secondSpan] = !isNewUser
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
  if (isAuthorized) return <h1>Hello, {localStorage.getItem('userName')}</h1>

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
