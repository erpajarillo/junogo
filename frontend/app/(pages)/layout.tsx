'use client'

import { useState, createContext } from 'react'
import { Menu } from '@Components/index'

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false)
  const UserLoggedContext = createContext(false)

  return (
    <>
      <Menu isLogged={isLogged} setIsLogged={setIsLogged} />
      <section>
        <UserLoggedContext.Provider value={isLogged}>
          {children}
        </UserLoggedContext.Provider>
      </section>
    </>
  )
}

export default PagesLayout