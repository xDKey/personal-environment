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
  })

  setUpComponent(true)

  const { user } = userResponseMock

  cy.get('label').should('have.length', 4)

  cy.get('label')
    .contains('Email')
    .parent()
    .should('have.text', `Email: ${user.email}`)

  cy.get('label')
    .contains('Name')
    .parent()
    .should('have.text', `Name: ${user.name}`)

  cy.get('label')
    .contains('Age')
    .parent()
    .should('have.text', `Age: ${user.age}`)

  cy.get('label')
    .contains('Biography')
    .parent()
    .should('have.text', `Biography: unknown`)

  cy.get('button').click()

  cy.get('input').should('have.length', 2)
  cy.get('textarea').should('have.value', '')
})
