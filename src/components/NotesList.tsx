import { Suspense, useEffect, useState } from 'react'
import { usePreloadedQuery, useQueryLoader } from 'react-relay'
import NotesListQuery from '../gql/query/NotesListQuery'
import AddNewNote from './AddNewNote'
import NoteItem from './NoteItem'
import { StyledButton } from './StyledComponents'
import type { NotesListQuery as QueryType } from '../gql/query/__generated__/NotesListQuery.graphql'

const NotesListWrapper = () => {
  const token = localStorage.getItem('token')
  const [queryRef, loadQuery] = useQueryLoader(NotesListQuery)

  useEffect(() => {
    if (token) loadQuery({})
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
  const { notes } = usePreloadedQuery<QueryType>(NotesListQuery, queryRef)
  const [showAddNote, setShowAddNote] = useState(false)
  const [cache, setCache] = useState(notes)

  type NoteType = {
    id: string
    title: string
    description: string | null
  }

  const updateCache = (payload: {
    newNote?: NoteType
    deletedNoteId?: string
  }) => {
    if (payload.newNote) {
      const newCache = [...cache, payload.newNote]
      setCache(newCache)
    }

    if (payload.deletedNoteId) {
      const newCache = cache.filter((note) => payload.deletedNoteId !== note.id)
      setCache(newCache)
    }
  }

  const renderedNotes = !cache.length ? (
    <h1>No Notes</h1>
  ) : (
    cache.map((note) => <NoteItem key={note.id} {...note} updateCache={updateCache}/>)
  )

  return (
    <>
      <StyledButton onClick={() => setShowAddNote(!showAddNote)}>
        {showAddNote ? 'Cancel' : 'Add Note'}
      </StyledButton>
      {showAddNote && <AddNewNote setShowAddNote={setShowAddNote} updateCache={updateCache} />}
      {renderedNotes}
    </>
  )
}

export default NotesListWrapper
