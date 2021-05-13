import { useMutation } from 'react-relay'
import styled from 'styled-components'
import DeleteNoteItemMutation from '../gql/mutations/DeleteNoteItemMutation'
import type { DeleteNoteItemMutation as MutationType } from '../gql/mutations/__generated__/DeleteNoteItemMutation.graphql'

const NoteItem = ({
  id,
  description,
  title,
}: {
  id: string
  description: string | null
  title: string
}) => {
  const [commit] = useMutation<MutationType>(DeleteNoteItemMutation)

  const hadleClick = () => {
    commit({
      variables: { id },
    })
  }

  return (
    <Wrapper>
      <StyledNote>
        {title} <span>{description}</span>
      </StyledNote>
      <button onClick={hadleClick}>X</button>
    </Wrapper>
  )
}

const StyledNote = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 2rem;
  span {
    font-size: 1.5rem;
    color: #505050;
  }
`
const Wrapper = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  button {
    background: none;
    border: 2px solid rgba(0, 0, 0, 0.25);
    font-size: 1.2rem;
  }
`

export default NoteItem
