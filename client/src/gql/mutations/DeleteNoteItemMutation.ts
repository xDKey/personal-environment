import { graphql } from 'babel-plugin-relay/macro'

const DeleteNoteItemMutation = graphql`
  mutation DeleteNoteItemMutation($id: ID!) {
    deleteNote(id: $id) {
      id
    }
  }
`

export default DeleteNoteItemMutation