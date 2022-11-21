import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_PARSE_SERVER_URL,
    headers: {
      'X-Parse-Application-Id': process.env.NEXT_PUBLIC_PARSE_SERVER_APP_ID,
      'Content-Type': 'application/json'
    }
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('junoGoToken');

  return {
    headers: {
      ...headers,
      'X-Parse-Session-Token': token ?? "",
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client