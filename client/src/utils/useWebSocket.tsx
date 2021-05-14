import { useEffect, useState } from 'react'
import { webSocket, WebSocketSubject } from 'rxjs/webSocket'

const useWebSocket = (query: string, url?: string) => {
  const [subject] = useState<WebSocketSubject<any>>(
    webSocket({
      url: url || 'ws://localhost:4000/graphql',
      protocol: 'graphql-ws',
    })
  )

  useEffect(() => {
    subject.next({
      type: 'connection_init',
      payload: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    })

    subject.next({
      id: '1',
      type: 'start',
      payload: {
        query,
      },
    })
  }, [query, subject])

  return subject
}

export default useWebSocket
