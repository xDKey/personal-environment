import { mount } from '@cypress/react'
import { RelayEnvironmentProvider } from 'react-relay'
import { BrowserRouter } from 'react-router-dom'
import RelayEnvironment from '../../utils/RelayEnvironment'
import AuthorizeForm from '../AuthorizeForm'
import { SERVER_URL } from './constants'

beforeEach(() => {
  mount(
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <BrowserRouter>
        <AuthorizeForm setIsLogged={cy.stub().as('setIsLogged')} />
      </BrowserRouter>
    </RelayEnvironmentProvider>
  )
  cy.intercept('POST', SERVER_URL).as('request')
})

it('Render correctly', () => {
  cy.get('h1').should('have.text', 'Please log in or register')
  cy.get('input').should('have.length', 2)
  cy.get('button[type="submit"]').should('have.text', 'Authorize')

  cy.contains('register').click()
  cy.get('h1').should('have.text', 'Please register or log in')
})

it('Should not send request if not all fields filled in', () => {
  cy.get('input[type="email"]').type('admin@admin{enter}')
  cy.get('@setIsLogged').should('not.have.been.called')

  cy.get('input[type="email"]').clear()
  cy.get('input[type="password"]').type('admin{enter}')
  cy.get('@setIsLogged').should('not.have.been.called')

  cy.contains('register').click()

  cy.get('input[type="password"]').clear()
  cy.get('input[type="text"]').type('admin')
  cy.get('input[type="email"]').type('admin@admin{enter}')
  cy.get('@setIsLogged').should('not.have.been.called')

  cy.get('input[type="text"]').clear()
  cy.get('input[type="password"]').type('admin{enter}')
  cy.get('@setIsLogged').should('not.have.been.called')
})

it('Should display an error message and not receive a token if the entered data is invalid', () => {
  cy.get('input[type="email"]').type('admin@admin')
  cy.get('input[type="password"]').type('a{enter}')

  cy.contains('Such user not found or password is invalid')

  cy.wait('@request').then(({ response }) => {
    assert(response?.body?.data?.login === null)
  })
})

it('Should receive a token if entered data is valid', () => {
  cy.get('input[type="email"]').type('admin@admin')
  cy.get('input[type="password"]').type('admin{enter}')

  cy.get('@setIsLogged').should('have.been.called')
  cy.wait('@request').then(({ response }) => {
    assert(response?.body.data.login.token)
  })
})
