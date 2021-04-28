import { graphql } from 'babel-plugin-relay/macro'
import { useMutation } from 'react-relay'
import styled from 'styled-components'
import type { NoteItemDeleteMutation as MutationType } from './__generated__/NoteItemDeleteMutation.graphql'

const Mutation = graphql`
  mutation NoteItemDeleteMutation($id: ID!) {
    deleteNote(id: $id) {
      id
    }
  }
`

const NoteItem = ({
  id,
  description,
  title,
  refreshQuery,
}: {
  id: string
  description: string | null
  title: string
  refreshQuery: () => void
}) => {
  const [commit] = useMutation<MutationType>(Mutation)

  const hadleClick = () => {
    commit({
      variables: { id },
      onCompleted() {
        refreshQuery()
      },
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
