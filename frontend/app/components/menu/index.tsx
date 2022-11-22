'use client'

import { useState, useContext, FC, ReactElement } from 'react'
import Link from 'next/link';
import { LoginModal, RegisterModal, Button } from '..'
import { useLogoutUser } from '@Gql/index'
import UserContext from '@App/context'

const Menu: FC = (): ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [logout, result] = useLogoutUser()
  const { isLogged, setIsLogged, setEmail, setUsername, loading, setError } = useContext(UserContext)

  const _handleLogout = () => {
    logout().catch((e: any) => console.log(e))

    localStorage.removeItem('junoGoToken')
    setUsername('')
    setEmail('')
    setError('Session Expired')
    setIsLogged(false)
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
                        <LoginModal />
                      </li>
                      <li className="nav-item">
                        <RegisterModal />
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

export default Menu