import { mount } from '@cypress/react'
import { RelayEnvironmentProvider } from 'react-relay'
import RelayEnvironment from '../utils/RelayEnvironment'
import NotesListWrapper from '../components/NotesList'
import { notesDataMock, SERVER_URL } from './constants'

const setUpComponent = (haveToken = false) => {
  if (haveToken) localStorage.setItem('token', 'testtoken')

  cy.intercept(SERVER_URL, {
    data: notesDataMock,
  }).as('fetch')
  mount(
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <NotesListWrapper />
    </RelayEnvironmentProvider>
  )
}

it('Display message "Please, log in" if there isnt token in localstorage', () => {
  setUpComponent()
  cy.get('h1').should('have.text', 'Please, log in')
})

it('Render correctly if there is token in localstorage', () => {
  setUpComponent(true)
  cy.get('section')
    .first()
    .should('include.text', notesDataMock.notes[0].title)
    .and('include.text', notesDataMock.notes[0].description)
    .and('include.html', 'button')

  cy.get('section')
    .last()
    .should('include.text', notesDataMock.notes[1].title)
    .and('include.text', notesDataMock.notes[1].description)
    .and('include.html', 'button')

  cy.get('button').contains('Add Note').click()

  cy.get('button').contains('Save')
  cy.get('input').should('have.length', 2)

  cy.get('button').contains('Cancel').click()
  cy.get('#__cy_root').should('not.include.html', 'input')
})
