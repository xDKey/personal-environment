import { graphql } from 'babel-plugin-relay/macro'
import { Suspense, useCallback, useEffect, useState } from 'react'
import { usePreloadedQuery, useQueryLoader } from 'react-relay'
import AddNewNote from './AddNewNote'
import NoteItem from './NoteItem'
import { StyledButton } from './StyledComponents'
import { NotesListQuery as QueryType } from './__generated__/NotesListQuery.graphql'

const NotesListQuery = graphql`
  query NotesListQuery {
    notes {
      id
      title
      description
    }
  }
`

const NotesListWrapper = () => {
  const [queryRef, loadQuery] = useQueryLoader(NotesListQuery)

  useEffect(() => {
    loadQuery({})
  }, [loadQuery])

  const refresh = useCallback(() => {
    loadQuery({}, { fetchPolicy: 'network-only' })
  }, [loadQuery])

  return (
    <>
      <Suspense fallback='Loading...'>
        {queryRef !== null && queryRef !== undefined && (
          <NotesList queryRef={queryRef} refresh={refresh} />
        )}
      </Suspense>
    </>
  )
}

const NotesList = ({
  queryRef,
  refresh,
}: {
  queryRef: any
  refresh: () => void
}) => {
  const { notes } = usePreloadedQuery<QueryType>(NotesListQuery, queryRef)
  const [showAddNote, setShowAddNote] = useState(false)

  useEffect(() => {
    refresh()
  }, [showAddNote, refresh])

  const renderedNotes = !notes.length
    ? 'No notes'
    : notes.map((note) => <NoteItem key={note.id} {...note} />)

  return (
    <>
      <StyledButton onClick={() => setShowAddNote(!showAddNote)}>
        {showAddNote ? 'Cancel' : 'Add Note'}
      </StyledButton>
      {showAddNote && <AddNewNote setShowAddNote={setShowAddNote} />}
      {renderedNotes}
    </>
  )
}

export default NotesListWrapper
