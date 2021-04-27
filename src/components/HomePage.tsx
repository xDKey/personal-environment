import { graphql } from 'babel-plugin-relay/macro'
import { Suspense, useCallback, useEffect, useState } from 'react'
import { usePreloadedQuery, useQueryLoader } from 'react-relay'
import DisplayUserInfo from './DisplayUserInfo'
import EditUserInfo from './EditUserInfo'
import { StyledButton } from './StyledComponents'

import type { HomePageUserInfoQuery as QueryType } from './__generated__/HomePageUserInfoQuery.graphql'

const HomePageUserInfoQuery = graphql`
  query HomePageUserInfoQuery {
    user {
      id
      name
      email
      bio
      age
    }
  }
`

const HomePageWrapper = () => {
  const token = localStorage.getItem('token')
  const [queryReference, loadQuery] = useQueryLoader(HomePageUserInfoQuery)

  useEffect(() => {
    if (token) loadQuery({})
  }, [loadQuery, token])

  const refresh = useCallback(() => {
    loadQuery({}, { fetchPolicy: 'network-only' })
  }, [loadQuery])

  return (
    <Suspense fallback='Loading...'>
      {queryReference ? (
        <HomePage queryReference={queryReference} refresh={refresh} />
      ) : (
        <h1>Please, log in</h1>
      )}
    </Suspense>
  )
}

const HomePage = ({
  queryReference,
  refresh,
}: {
  queryReference: any,
  refresh: () => void
}) => {
  const [isEditing, setIsEditing] = useState(false)

  const data = usePreloadedQuery<QueryType>(
    HomePageUserInfoQuery,
    queryReference
  )

  useEffect(() => {
    refresh()
  }, [isEditing, refresh])

  const handleEditChange = (edit?: boolean) => {
    setIsEditing(edit || false)
  }

  const renderedFields = isEditing ? (
    <EditUserInfo data={data} setIsEditing={handleEditChange} />
  ) : (
    <DisplayUserInfo data={data} />
  )

  return (
    <>
      {renderedFields}
      {!isEditing && (
        <StyledButton onClick={() => setIsEditing(!isEditing)}>
          Edit Information
        </StyledButton>
      )}
    </>
  )
}

export default HomePageWrapper
