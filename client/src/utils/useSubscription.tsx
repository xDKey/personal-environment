import { useEffect, useState } from 'react'
import { WebSocketSubject } from 'rxjs/webSocket'
import { NoteType, ResponseSubscriptionType } from '../types/subscriptions'

const useSubscription = (observable: WebSocketSubject<any>) => {
  const [fetchedNote, setFetchedNote] = useState<NoteType>()
  
  useEffect(() => {
    const subscription = observable.subscribe((response: ResponseSubscriptionType) => {
      if (response.type === 'data') setFetchedNote(response.payload.data.changedNotes)
    })

    return () => subscription.unsubscribe()
  }, [observable])

  return fetchedNote
}

export default useSubscription
