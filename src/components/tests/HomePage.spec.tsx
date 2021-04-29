import { mount } from '@cypress/react'
import { RelayEnvironmentProvider } from 'react-relay'
import RelayEnvironment from '../../utils/RelayEnvironment'
import HomePageWrapper from '../HomePage'
import { SERVER_URL, userResponseMock } from './constants'

const setUpComponent = (haveToken: boolean = false) => {
  if (haveToken) localStorage.setItem('token', 'testtoken')

  mount(
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <HomePageWrapper />
    </RelayEnvironmentProvider>
  )
}

it('Display message "Please, log in" if there isnt token in localstorage', () => {
  setUpComponent()
  cy.get('h1').should('have.text', 'Please, log in')
})

it('Render correctly if there is token in localstorage', () => {

  cy.intercept(SERVER_URL, {
    data: userResponseMock,
  }).as('fetch')

  setUpComponent(true)
  cy.get('button').click()

  cy.get('input').should('have.length', 2)
  cy.get('textarea').should('have.value', '')
})
