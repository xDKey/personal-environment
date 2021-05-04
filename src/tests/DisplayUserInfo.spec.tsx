import { mount } from '@cypress/react'
import DisplayUserInfo from '../components/DisplayUserInfo'
import { userResponseMock } from './constants'

it('Render correctly', () => {
  mount(<DisplayUserInfo data={userResponseMock} />)

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
})
