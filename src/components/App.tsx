import { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'
import AuthorizeForm from './AuthorizeForm'
import Header from './Header'
import HomePage from './HomePage'

const App = () => {
  const [token, setToken] = useState('')

  useEffect(() => {
    const localToken: string | null = localStorage.getItem('token')
    if (localToken) setToken(localToken)
  }, [])

  return (
    <BrowserRouter>
      <Root>
        <Header token={token} />
        <Route exact path='/' component={HomePage}/>
        <Route path='/login'>
          <AuthorizeForm  />
        </Route>
      </Root>
    </BrowserRouter>
  )
}

const Root = styled.main`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
`

export default App
