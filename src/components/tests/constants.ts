import type { HomePageUserInfoQueryResponse } from '../__generated__/HomePageUserInfoQuery.graphql'

export const SERVER_URL = 'http://localhost:4000/'

export const userResponseMock: HomePageUserInfoQueryResponse = {
  user: {
    id: '1',
    name: 'Test Name',
    email: 'Test Email',
    bio: null,
    age: 20,
  },
}
