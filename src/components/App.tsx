import { graphql } from 'babel-plugin-relay/macro'
import { Suspense } from 'react'
import { usePreloadedQuery, useQueryLoader } from 'react-relay'
import type { AppUserNameQuery as QueryType } from './__generated__/AppUserNameQuery.graphql'

const UserNameQuery = graphql`
  query AppUserNameQuery {
    user {
      name
      id
      email
    }
  }
`
const App = () => {
  const [queryRef, loadQuery] = useQueryLoader(UserNameQuery)

  if (!queryRef)
    return <button onClick={() => loadQuery({})}>Load the name</button>
  return (
    <>
      <Suspense fallback='Loading...'>
        <NameDisplay queryRef={queryRef} />
      </Suspense>
    </>
  )
}

const NameDisplay = (props: any) => {
  const data = usePreloadedQuery<QueryType>(UserNameQuery, props.queryRef)
  return <h1>{data.user.name}</h1>
}

export default App
