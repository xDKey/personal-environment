import { Suspense, useCallback, useEffect, useState } from 'react'
import { usePreloadedQuery, useQueryLoader } from 'react-relay'
import NotesListQuery from '../gql/query/NotesListQuery'
import AddNewNote from './AddNewNote'
import NoteItem from './NoteItem'
import { StyledButton } from './StyledComponents'
import { NotesListQuery as QueryType } from '../gql/query/__generated__/NotesListQuery.graphql'

const NotesListWrapper = () => {
  const token = localStorage.getItem('token')
  const [queryRef, loadQuery] = useQueryLoader(NotesListQuery)

  useEffect(() => {
    if (token) loadQuery({})
  }, [loadQuery, token])

  const refresh = useCallback(() => {
    loadQuery({}, { fetchPolicy: 'network-only' })
  }, [loadQuery])

  return (
    <>
      <Suspense fallback='Loading...'>
        {queryRef ? (
          <NotesList queryRef={queryRef} refresh={refresh} />
        ) : (
          <h1>Please, log in</h1>
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

  const renderedNotes = !notes.length ? (
    <h1>No Notes</h1>
  ) : (
    notes.map((note) => (
      <NoteItem key={note.id} {...note} refreshQuery={refresh} />
    ))
  )

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
