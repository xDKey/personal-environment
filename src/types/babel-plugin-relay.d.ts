//for correct work type-checking with babel-plugin-relay

declare module 'babel-plugin-relay/macro' {
  export { graphql } from 'react-relay'
}
