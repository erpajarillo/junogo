import { gql } from '@apollo/client'

const LOGOUT_USER = gql`
mutation logOut {
  logOut(input: { clientMutationId: "logOut" }) {
    clientMutationId
		ok
  }
}`

export default LOGOUT_USER