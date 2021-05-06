import { mount } from '@cypress/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'

let isLogged = true

beforeEach(() => {
  const setIsLogged = cy.stub(() => (isLogged = !isLogged))
  mount(
    <BrowserRouter>
      <Header isLogged={isLogged} setIsLogged={setIsLogged} />
    </BrowserRouter>
  )
})

it('Render correctly', () => {
  cy.get('h1').should('be.visible')
  cy.get('a').should('have.length', 3)
  cy.get('a').last().should('have.text', 'Logout')
})

it('Route to right path on click on the links', () => {
  cy.contains('Notes').click()
  cy.location().its('pathname').should('equal', '/notes')

  cy.contains('Your Information').click()
  cy.location().its('pathname').should('equal', '/')

  cy.contains('Logout').click()
  cy.location().its('pathname').should('equal', '/login')
})

describe('Should change innertext onclick login button', () => {
  it('Render with innertext equal "Login"', () => {
    cy.get('a').last().should('have.text', 'Login').click()
  })

  it('Render with innertext equal "Logout"', () => {
    cy.get('a').last().should('have.text', 'Logout')
  })
})
