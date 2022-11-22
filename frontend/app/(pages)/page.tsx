'use client'

import { useContext } from 'react'
import UserContext from '@App/context'

const Main = () => {
  const { isLogged, username, loading } = useContext(UserContext)

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