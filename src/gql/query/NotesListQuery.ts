import { graphql } from 'babel-plugin-relay/macro'

const NotesListQuery = graphql`
  query NotesListQuery {
    notes {
      id
      title
      description
    }
  }
`

export default NotesListQuery