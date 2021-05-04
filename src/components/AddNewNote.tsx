import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { useMutation } from 'react-relay'
import styled from 'styled-components'
import AddNewNoteMutation from '../gql/mutations/AddNewNoteMutation'
import { StyledInputText, StyledButton } from './StyledComponents'
import type { AddNewNoteMutation as MutationType } from '../gql/mutations/__generated__/AddNewNoteMutation.graphql'

const AddNewNote = ({
  setShowAddNote,
}: {
  setShowAddNote: Dispatch<SetStateAction<boolean>>
}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [commit] = useMutation<MutationType>(AddNewNoteMutation)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    commit({
      variables: { title, description },
      onCompleted(data) {
        if (data.addNote) setShowAddNote(false)
      },
    })
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledButton type='submit'>Save</StyledButton>
      <StyledInputText
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Enter title'
        required
      />
      <StyledInputText
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Enter description (optional)'
      />
    </StyledForm>
  )
}

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;

  button {
    margin-bottom: 20px;
  }
`

export default AddNewNote
