import { graphql } from 'babel-plugin-relay/macro'

const changedNotesSubscription = graphql`
  subscription changedNotesSubscription {
    changedNotes {
      id
      title
      description
    }
  }
`
export default changedNotesSubscription
