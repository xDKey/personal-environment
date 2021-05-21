import { verify } from 'jsonwebtoken'
export const APP_SECRET = 'GraphQL'

export const getTokenPayload = (token: string) => verify(token, APP_SECRET)

export const getUserId = (req: any, authToken?: string) => {
  if (!req) throw new Error('Not authenticated')

  const authHeader = req.headers.authorization
  if (authHeader !== 'null') {
    const result: any = getTokenPayload(authHeader)
    return result.userId
  }
  if (authToken) {
    const result: any = getTokenPayload(authToken)
    return result.userId
  }
}
