import { gql } from '@apollo/client'

const REGISTER_USER = gql`
mutation signUp ($username: String!, $password: String!, $email: String!) {
  signUp(
    input: {
      fields: {
        username: $username
        password: $password
        email: $email
      }
    }
  ) {
    viewer {
      sessionToken
      user {
        username
        email
      }
    }
  }
}`

export default REGISTER_USER