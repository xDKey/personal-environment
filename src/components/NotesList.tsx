import { graphql } from 'babel-plugin-relay/macro'
import { Suspense, useEffect } from 'react'
import { usePreloadedQuery, useQueryLoader } from 'react-relay'
import NoteItem from './mutations/NoteItem'
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

  return (
    <>
      <Suspense fallback='Loading...'>
        {queryRef !== null && queryRef !== undefined && (
          <NotesList queryRef={queryRef} />
        )}
      </Suspense>
    </>
  )
}

const NotesList = ({ queryRef }: { queryRef: any }) => {
  const { notes } = usePreloadedQuery<QueryType>(NotesListQuery, queryRef)

  const renderedNotes = !notes.length
    ? 'No notes'
    : notes.map((note) => <NoteItem key={note.id} {...note} />)

  return (
    <>
      {renderedNotes}
    </>
  )
}

export default NotesListWrapper
