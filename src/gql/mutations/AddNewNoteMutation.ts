import { graphql } from 'babel-plugin-relay/macro'

const AddNewNoteMutation = graphql`
  mutation AddNewNoteMutation($title: String!, $description: String) {
    addNote(title: $title, description: $description) {
      id
    }
  }
`
export default AddNewNoteMutation