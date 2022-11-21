import { gql } from '@apollo/client'

const CHECK_HEALTH = gql`
query healthy {
  health
}`

export default CHECK_HEALTH