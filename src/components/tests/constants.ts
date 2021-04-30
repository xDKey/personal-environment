import type { HomePageUserInfoQueryResponse } from '../__generated__/HomePageUserInfoQuery.graphql'
import { NotesListQueryResponse } from '../__generated__/NotesListQuery.graphql'

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

export const notesDataMock: NotesListQueryResponse = {
  notes: [
    {
      id: 'Test ID',
      title: 'Test Title 1',
      description: 'Test Description 1',
    },
    {
      id: 'Test ID 2',
      title: 'Test Title 2',
      description: 'Test Description 2',
    },
  ],
}