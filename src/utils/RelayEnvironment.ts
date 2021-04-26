import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from 'relay-runtime'

const token: string =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYxOTEwMTE5MH0.rKKY8x0J06-UfRB9xsFF0imZFAV5ZC3_PVRK09Bmsr0'

export const fetchQuery = async (
  query: string | undefined | null,
  variables?: Variables
) => {
  const response = await fetch('http://localhost:4000/', {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  return await response.json()
}

const fetchRelay = async (params: RequestParameters, vars: Variables) => {
  return fetchQuery(params.text, vars)
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
})
