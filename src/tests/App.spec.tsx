import { mount } from '@cypress/react'
import { RelayEnvironmentProvider } from 'react-relay'
import { BrowserRouter } from 'react-router-dom'
import RelayEnvironment from '../utils/RelayEnvironment'
import App from '../components/App'
import { notesDataMock, SERVER_URL, userResponseMock } from './constants'

const setUpComponent = (haveToken = false) => {
  if (haveToken) localStorage.setItem('token', 'testtoken')

  cy.intercept(SERVER_URL, {
    data: { ...userResponseMock, ...notesDataMock },
  })

  mount(
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RelayEnvironmentProvider>
  )
}

it('Render correctly without token', () => {
  setUpComponent()
  cy.get('h1').should('have.text', 'Welcome to Personal Environment!')

  cy.get('a').contains('Your Information').click()
  cy.contains('Please, log in')

  cy.get('a').contains('Notes').click()
  cy.contains('Please, log in')

  cy.get('a').contains('Login').click()
  cy.contains('Please log in or register')
  cy.get('input').should('have.length', 2)

  cy.get('span').contains('register').click()
  cy.contains('Please register or log in')
  cy.get('input').should('have.length', 3)
  cy.get('button').contains('Authorize')
})

it('Render correctly with token', () => {
  setUpComponent(true)
  cy.get('h1').contains('Welcome to Personal Environment!')

  //component <HomePage />
  cy.get('a').contains('Your Information').click()
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

  //component <NotesList />
  cy.get('a').contains('Notes').click()
  const { notes } = notesDataMock

  cy.get('section')
    .first()
    .should('include.text', notes[0].title)
    .and('include.text', notes[0].description)
    .and('include.html', 'button')

  cy.get('section')
    .last()
    .should('include.text', notes[1].title)
    .and('include.text', notes[1].description)
    .and('include.html', 'button')

  cy.get('button').contains('Add Note').click()

  cy.get('button').contains('Save')
  cy.get('input').should('have.length', 2)

  cy.get('button').contains('Cancel').click()
  cy.get('#__cy_root').should('not.include.html', 'input')

  //component <AuthorizeForm />
  cy.get('a')
    .contains('Logout')
    .click()
    .then(() => expect(localStorage.getItem('token')).to.be.eq(''))

  cy.contains('Please log in or register')
  cy.get('input').should('have.length', 2)
  cy.get('button[type="submit"]').should('have.text', 'Authorize')

  cy.contains('register').click()
  cy.contains('Please register or log in')
})
