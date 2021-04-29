import { mount } from '@cypress/react'
import { RelayEnvironmentProvider } from 'react-relay'
import RelayEnvironment from '../../utils/RelayEnvironment'
import EditUserInfo from '../EditUserInfo'
import { SERVER_URL, userResponseMock } from './constants'

beforeEach(() => {
  mount(
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <EditUserInfo
        data={userResponseMock}
        setIsEditing={cy.stub().as('setIsEditing')}
      />
    </RelayEnvironmentProvider>
  )
  cy.intercept(SERVER_URL).as('request')
})

const { user } = userResponseMock

it('Render correctly', () => {
  cy.get('label')
    .contains('Name:')
    .parent()
    .children('input')
    .should('have.value', user.name)

  cy.get('label')
    .contains('Age:')
    .parent()
    .children('input')
    .should('have.value', user.age)

  cy.get('textarea').should('have.value', '')
})

it('Send request if button clicked', () => {
  cy.get('input').first().clear().type('newName')
  cy.get('input').last().clear().type('1')
  cy.get('button').click()

  cy.wait('@request')
    .its('request.body.variables')
    .should('deep.equal', { name: 'newName', age: 10, bio: user.bio })

  cy.get('textarea').clear().type('Test biography')
  cy.get('button').click()

  cy.wait('@request')
    .its('request.body.variables')
    .should('deep.equal', { name: 'newName', age: 10, bio: 'Test biography' })
})
