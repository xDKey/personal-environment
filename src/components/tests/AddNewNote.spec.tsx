import { mount } from '@cypress/react'
import { RelayEnvironmentProvider } from 'react-relay'
import RelayEnvironment from '../../utils/RelayEnvironment'
import AddNewNote from '../AddNewNote'
import { SERVER_URL } from './constants'

describe('<AddNewNote />', () => {
  beforeEach(() => {
    mount(
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <AddNewNote setShowAddNote={cy.stub().as('setShowAddNote')} />
      </RelayEnvironmentProvider>
    )
    cy.intercept('POST', SERVER_URL, {
      data: {
        addNote: 'check',
      },
    }).as('request')
  })

  it('Render correctly', () => {
    cy.get('button[type="submit"]').should('have.text', 'Save')
    cy.get('input').should('have.length', 2)
  })

  it('Should not send request if not title field filled in', () => {
    cy.get('input').last().type('check{enter}')
    cy.get('@setShowAddNote').should('not.have.been.called')
  })

  it('Should send request if title field filled in', () => {
    cy.get('input').first().type('check{enter}')
    cy.wait('@request').then((fetch) => {
      const { request } = fetch
      expect(request.body).to.include.all.keys('query', 'variables')
      expect(request.body.variables).to.deep.equal({
        title: 'check',
        description: '',
      })
    })

    cy.get('input').last().type('description{enter}')
    cy.wait('@request')
      .its('request.body.variables')
      .should('deep.equal', { title: 'check', description: 'description' })
  })
})
