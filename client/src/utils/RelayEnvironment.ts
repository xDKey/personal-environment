import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from 'relay-runtime'

export const fetchQuery = async (
  query: string | undefined | null,
  variables?: Variables
) => {
  const response = await fetch('http://localhost:4000/', {
    method: 'POST',
    headers: {
      'Authorization': `${localStorage.getItem('token')}`,
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
