import { mount } from '@cypress/react'
import { RelayEnvironmentProvider } from 'react-relay'
import RelayEnvironment from '../../utils/RelayEnvironment'
import NoteItem from '../NoteItem'
import { SERVER_URL } from './constants'

const initProps = {
  id: '1',
  title: 'Test title',
  description: 'Test description',
  refreshQuery: () => {},
}

beforeEach(() => {
  mount(
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <NoteItem {...initProps} />
    </RelayEnvironmentProvider>
  )

  cy.intercept(SERVER_URL).as('fetch')
})

it('Render correctly', () => {
  cy.get('li').should('have.text', 'Test title Test description')
  cy.get('button').should('have.text', 'X')
})

it('Should send request on click button "X"', () => {
  cy.get('button').contains('X').click()
  cy.wait('@fetch')
    .its('request.body.variables')
    .should('deep.equal', { id: initProps.id })
})
