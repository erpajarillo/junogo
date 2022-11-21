'use client'

import { ApolloProvider } from '@apollo/client'
import { client } from '../graphql'
import './globals.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      </body>
    </html>
  )
}

export default RootLayout