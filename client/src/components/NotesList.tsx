import { Suspense, useEffect, useState } from 'react'
import { usePreloadedQuery, useQueryLoader, useSubscription } from 'react-relay'
import { GraphQLSubscriptionConfig } from 'relay-runtime'

import NotesListQuery from '../gql/query/NotesListQuery'
import AddNewNote from './AddNewNote'
import NoteItem from './NoteItem'
import { StyledButton } from './StyledComponents'
import changedNotesSubscription from '../gql/subscriptions/changedNotes'
import type { NotesListQuery as QueryType } from '../gql/query/__generated__/NotesListQuery.graphql'
import type { changedNotesSubscription as SubscriptionType } from '../gql/subscriptions/__generated__/changedNotesSubscription.graphql'

type NoteType = {
  id: string
  title: string
  description: string | null
}

const NotesListWrapper = () => {
  const token = localStorage.getItem('token')
  const [queryRef, loadQuery] = useQueryLoader(NotesListQuery)

  useEffect(() => {
    if (token)
      loadQuery({}, { fetchPolicy: 'network-only' })
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

  const config: GraphQLSubscriptionConfig<SubscriptionType> = {
    subscription: changedNotesSubscription,
    variables: {},
    onNext: (v) => {
      if (v?.changedNotes) {
        updateCache(v.changedNotes)
      }
    },
  }

  useSubscription(config)

  const updateCache = (note: NoteType) => {
    const noteIdx = cache.findIndex(({ id }) => id === note.id)

    if (noteIdx !== -1) {
      setCache((prev) => {
        return [
          ...prev.slice(0, noteIdx), 
          ...prev.slice(noteIdx + 1)
        ]
      })
    }
    if (noteIdx === -1) setCache((prev) => [...prev, note])
  }

  const renderedNotes = !cache.length ? (
    <h1>No Notes</h1>
  ) : (
    cache.map((note) => <NoteItem key={note.id} {...note} />)
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
