import { useState, useEffect } from 'react'
import styled from 'styled-components'
import AuthorizeForm from './AuthorizeForm'

const App = () => {
  const [token, setToken] = useState('')

  useEffect(() => {   
      const localToken: string | null = localStorage.getItem('token')
      if (localToken) setToken(localToken)
  }, [])
  
  return (
    <Root>
      <h1>Welcome to Personal Environment!</h1>
      {!token && <AuthorizeForm /> }
    </Root>
  )
}

const Root = styled.main`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default App
