import { mount } from '@cypress/react'
import DisplayUserInfo from '../DisplayUserInfo'
import { HomePageUserInfoQueryResponse } from '../__generated__/HomePageUserInfoQuery.graphql'

describe('<DisplayUserInfo />', () => {
  const data: HomePageUserInfoQueryResponse = {
    user: {
      id: '1',
      name: 'Test Name',
      email: 'Test Email',
      bio: null,
      age: 20,
    },
  }
  it('Render correctly', () => {
    mount(<DisplayUserInfo data={data} />)

    cy.get('label').should('have.length', 4)

    cy.get('label')
      .contains('Email')
      .parent()
      .should('have.text', `Email: ${data.user.email}`)

    cy.get('label')
      .contains('Name')
      .parent()
      .should('have.text', `Name: ${data.user.name}`)

    cy.get('label')
      .contains('Age')
      .parent()
      .should('have.text', `Age: ${data.user.age}`)

    cy.get('label')
      .contains('Biography')
      .parent()
      .should('have.text', `Biography: unknown`)
  })
})
