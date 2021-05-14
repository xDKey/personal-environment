import { Suspense, useEffect, useState } from 'react'
import { usePreloadedQuery, useQueryLoader } from 'react-relay'

import NotesListQuery from '../gql/query/NotesListQuery'
import AddNewNote from './AddNewNote'
import NoteItem from './NoteItem'
import { StyledButton } from './StyledComponents'
import changedNotesSubscription from '../gql/subscriptions/changedNotes'
import type { NotesListQuery as QueryType } from '../gql/query/__generated__/NotesListQuery.graphql'
import useWebSocket from '../utils/useWebSocket'
import { NoteType } from '../types/subscriptions'
import useSubscription from '../utils/useSubscription'

const NotesListWrapper = () => {
  const token = localStorage.getItem('token')
  const [queryRef, loadQuery] = useQueryLoader(NotesListQuery)

  useEffect(() => {
    if (token) loadQuery({}, { fetchPolicy: 'network-only' })
  }, [loadQuery, token])

  return (
    <>
      <Suspense fallback='Loading...'>
        {queryRef ? <NotesList queryRef={queryRef} /> : <h1>Please, log in</h1>}
      </Suspense>
    </>
  )
}

const NotesList = ({ queryRef }: { queryRef: any }) => {
  const { notes: fetchedNotes } = usePreloadedQuery<QueryType>(
    NotesListQuery,
    queryRef
  )
  const [notes, setNotes] = useState(fetchedNotes)
  const [showAddNote, setShowAddNote] = useState(false)
  const observable = useWebSocket(changedNotesSubscription)
  const currentNote = useSubscription(observable)

  useEffect(() => {
    if (currentNote) updateNotesList(currentNote)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentNote])

  const updateNotesList = (note: NoteType) => {
    const noteIdx = notes.findIndex(({ id }) => id === note.id)

    if (noteIdx !== -1) {
      setNotes((prev) => {
        return [...prev.slice(0, noteIdx), ...prev.slice(noteIdx + 1)]
      })
    }
    if (noteIdx === -1) setNotes((prev) => [...prev, note])
  }

  const renderedNotes = !notes.length ? (
    <h1>No Notes</h1>
  ) : (
    notes.map((note) => <NoteItem key={note.id} {...note} />)
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
