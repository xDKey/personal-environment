const { verify } = require('jsonwebtoken')
const APP_SECRET = 'GraphQL'

const getTokenPayload = (token) => verify(token, APP_SECRET)

const getUserId = (req, authToken) => {
  if (!req) throw new Error('Not authenticated')

  const authHeader = req.headers.authorization
  if (authHeader) {
    const { userId } = getTokenPayload(authHeader)
    return userId
  }
  if (authToken) {
    const { userId } = getTokenPayload(authToken)
    return userId
  }
}

module.exports = {
  APP_SECRET,
  getUserId,
}
