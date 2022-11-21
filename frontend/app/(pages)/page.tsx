'use client'

import { useState, useEffect } from 'react'
import { useSessionUser } from '@Gql/index'

const Main = () => {
  const { loading: sessionLoading, error, data } = useSessionUser()
  const [isLogged, setIsLogged] = useState(false)
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState('')

  useEffect(() => {
    if (data?.viewer?.sessionToken) {
      setUsername(data?.viewer?.user?.username)
      setIsLogged(true)
    } 
    if (error) {
      setIsLogged(false)
      setUsername('')
    }
    setLoading(sessionLoading)
  }, [data, error, sessionLoading])

  if (loading) return <p className='text-center text-sm m-2'>Loading...</p>

  return (
    <>
      { !isLogged && 
        <>
          <h1 className='text-center text-4xl'>
            Welcome!
          </h1>
          <p className='text-center text-sm m-2'>
            Click in Login or Register in the Header Menu
          </p>
        </>
      }
      {
        isLogged &&
        <>
          <h1 className='text-center text-4xl'>
            { username }, you are logged!
          </h1>
        </>
      }
    </>
  )
}

export default Main