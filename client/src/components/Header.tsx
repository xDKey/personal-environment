import { Dispatch, SetStateAction } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
  isLogged: boolean
  setIsLogged: Dispatch<SetStateAction<any>>
}

const Header = ({ isLogged, setIsLogged }: Props) => {
  const history = useHistory()

  const logOut = () => {
    localStorage.setItem('token', '')
    setIsLogged(false)
    history.replace('/')
  }

  return (
    <StyledHeader>
      <h1>Welcome to Personal Environment!</h1>
      <StyledNav>
        <Link to='/'>Your Information</Link>
        <Link to='/notes'>Notes</Link>
        <Link to='/login' onClick={logOut}>
          {isLogged ? 'Logout' : 'Login'}
        </Link>
      </StyledNav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 255, 255, 0.15);
  h1 {
    text-align: center;
  }
`

const StyledNav = styled.nav`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  a {
    cursor: pointer;
    color: white;
    font-weight: bold;
    padding: 10px 16px;
    background: #2196f3;

    border-radius: 4px;
  }
`

export default Header
