import { graphql } from 'babel-plugin-relay/macro'
import { Suspense, useEffect, useState } from 'react'
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

  return (
    <Suspense fallback='Loading...'>
      {queryReference ? (
        <HomePage queryReference={queryReference} />
      ) : (
        <h1>Please, log in</h1>
      )}
    </Suspense>
  )
}

const HomePage = ({ queryReference }: { queryReference: any }) => {
  const [isEditing, setIsEditing] = useState(false)

  const data = usePreloadedQuery<QueryType>(
    HomePageUserInfoQuery,
    queryReference
  )

  const handleClick = () => {
    setIsEditing(!isEditing)
  }

  const renderedFields = isEditing ? (
    <EditUserInfo data={data} />
  ) : (
    <DisplayUserInfo data={data} />
  )

  return (
    <>
      {renderedFields}
      <StyledButton onClick={handleClick}>
        {isEditing ? 'Save changes' : 'Edit Information'}
      </StyledButton>
    </>
  )
}

export default HomePageWrapper
