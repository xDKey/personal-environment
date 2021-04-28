import styled from 'styled-components'

const NoteItem = ({
  id,
  description,
  title,
}: {
  id: string
  description: string | null
  title: string
}) => {
  return (
    <StyledNote>
      {title} <span>{description}</span>
    </StyledNote>
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

export default NoteItem
