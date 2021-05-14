type ResponsePayloadType = {
  data: {
    changedNotes: NoteType
  }
}

export type NoteType = {
  id: string
  title: string
  description: string | null
}

export type ResponseSubscriptionType = {
  id: string
  type: string
  payload: ResponsePayloadType
}
