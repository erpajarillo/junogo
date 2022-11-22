'use client'

import { useState, useEffect, ReactNode } from 'react'
import { Menu } from '@Components/index'
import UserContext from '@App/context'
import { useSessionUser } from '@Gql/index'

const PagesLayout = ({ children }: { children: ReactNode }): ReactNode => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [isLogged, setIsLogged] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const session = useSessionUser()

  useEffect(() => {
    setError('')
    if (session.error?.message) {
      setError(session.error.message)
    }

    if (!error && session.data?.viewer) {
      setIsLogged(true)
      setUsername(session.data.viewer.user.username)
      setEmail(session.data.viewer.user.email)
    }

    setLoading(session.loading)
  }, [session, error])

  if (loading) return <p>Loading...</p>

  return (
    <>
      <UserContext.Provider value={
        { isLogged, setIsLogged, email, setEmail, username, setUsername, loading, setLoading, error, setError }}>
        <Menu />
        <section>
            {children}
        </section>
      </UserContext.Provider>
    </>
  )
}

export default PagesLayout