import { createContext } from 'react'

interface IProps {
  isLogged: boolean
  setIsLogged: any
  username: string
  setUsername: any
  loading: boolean
  setLoading: any
  error: string
  setError: any
}

const Context = createContext(<IProps>{})

export default Context