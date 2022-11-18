'use client'

import { ApolloProvider } from "@apollo/client"
import { client } from '../../graphql'

const LoginLayout = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  return (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
  )
}

export default LoginLayout