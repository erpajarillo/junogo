'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link';
import { LoginModal, RegisterModal, Button } from '..'
import { useLogoutUser, useSessionUser } from '../../../graphql'

export default function Menu({ isLogged, setIsLogged }: any) {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [logout, result] = useLogoutUser()
  const session = useSessionUser()

  useEffect(() => {
    if (session.error?.message) setError(session.error.message)

    if (!error && session.data?.viewer) setIsLogged(true)

    setLoading(session.loading)
  }, [session])

  const _handleLogout = () => {
    logout().catch(e => console.log(e))
    localStorage.removeItem('junoGoToken')
    setIsLogged(false)
    setError('Session Expired')
  }

  return (
    <>
      <div className="flex flex-wrap py-2">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-cyan-500 rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <Link
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                  href="/"
                >
                  Juno Go
                </Link>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  { !loading && !isLogged &&
                    <>
                      <li className="nav-item">
                        <LoginModal setIsLogged={setIsLogged} />
                      </li>
                      <li className="nav-item">
                        <RegisterModal setIsLogged={setIsLogged} />
                      </li>
                    </>
                  }
                  { !loading && isLogged &&
                    <>
                      <li className="nav-item">
                        <Button label='Logout' type='menu' onClick={_handleLogout} />
                      </li>
                    </>
                  }
                  { loading &&
                    <>
                      <li className="nav-item">
                        <p className='text-white text-sm'>Loading...</p>
                      </li>
                    </>
                  }
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}