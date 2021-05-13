import {
  Environment,
  Network,
  Observable,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from 'relay-runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'

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

const subscriptionClient = new SubscriptionClient('ws://localhost:4000/graphql')

const subscribe = (request: any, variables: Variables) => {
  const subscribeObservable: any = subscriptionClient.request({
    query: request.text,
    operationName: request.name,
    variables
  })

  return Observable.from(subscribeObservable)
}

export default new Environment({
  network: Network.create(fetchRelay, subscribe),
  store: new Store(new RecordSource()),
})
