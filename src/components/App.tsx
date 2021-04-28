import { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'
import AuthorizeForm from './AuthorizeForm'
import Header from './Header'
import HomePage from './HomePage'
import NotesList from './NotesList'

const App = () => {
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const localToken: string | null = localStorage.getItem('token')
    if (localToken) setIsLogged(true)
    if (!localToken) setIsLogged(false)
  }, [])

  return (
    <BrowserRouter>
      <Root>
        <Header isLogged={isLogged} setIsLogged={setIsLogged} />
        <Route path='/notes' component={NotesList} />
        <Route exact path='/' component={HomePage} />
        <Route path='/login'>
          <AuthorizeForm setIsLogged={setIsLogged} />
        </Route>
      </Root>
    </BrowserRouter>
  )
}

const Root = styled.main`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 826px) {
    width: 60%;
  }
`

export default App
