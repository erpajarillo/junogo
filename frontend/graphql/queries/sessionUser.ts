import { gql } from '@apollo/client'

const SESSION_USER = gql`
query viewer {
  viewer {
    sessionToken
    user {
      username
      email
    }
  }
}`

export default SESSION_USER