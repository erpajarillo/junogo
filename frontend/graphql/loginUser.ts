import { gql } from '@apollo/client'

const LOGIN_USER = gql`
mutation logIn ($username: String!, $password: String!) {
  logIn(input: { username: $username, password: $password }) {
    viewer {
      sessionToken
      user {
        username
        email
      }
    }
  }
}`

export default LOGIN_USER