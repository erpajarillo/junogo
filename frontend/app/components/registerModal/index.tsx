'use client'

import { useState, useEffect, useContext, FC, ReactElement } from 'react'
import { Button, Textbox } from '..'
import { useRegisterUser } from '@Gql/index'
import UserContext from '@App/context'

const RegisterModal: FC = (): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [register, result] = useRegisterUser()
  const [showModal, setShowModal] = useState(false)
  const { setIsLogged, setEmail: setLoggedEmail, setUsername: setLoggedUsername } = useContext(UserContext)

  useEffect(() => {
    setError('')

    const sessionData = result.data?.signUp?.viewer
    const token = sessionData?.sessionToken
    const email = sessionData?.user?.email

    if (result.error?.message) setError(result.error?.message)
    
    if (token) {
      localStorage.setItem('junoGoToken', token)
      setShowModal(false)
      setLoggedUsername(username)
      setLoggedEmail(email)
      setIsLogged(true)
    }

    
    setLoading(result.loading)
  }, [result])

  useEffect(() => {
    setEmail('')
    setUsername('')
    setPassword('')
    setError('')
  }, [showModal])

  const _handleEmail = (event: any) => setEmail(event.target.value)
  const _handleUsername = (event: any) => setUsername(event.target.value)
  const _handlePassword = (event: any) => setPassword(event.target.value)
  const _handleRegister = () => register({ variables: { username, password, email }}).catch((e: any) => null)

  return (
    <>
      <Button type='menu' label='Register' onClick={() => setShowModal(true)} />
      {showModal ? (
        <>
          <div
            className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
          >
            <div className='relative w-auto my-6 mx-auto w-full max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                  <h3 className='text-3xl font-semibold'>
                    Register
                  </h3>
                  <Button label='x' type='transparent' onClick={() => setShowModal(false)} />
                </div>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <Textbox label='Email' onChange={_handleEmail} value={email} />
                  <Textbox label='Username' onChange={_handleUsername} value={username} />
                  <Textbox label='Password' type='password' onChange={_handlePassword} value={password} />
                  { error && <p className='text-sm text-red-600'><b>Error:</b> { error }</p>}
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                  <Button label='Close' type='gray' onClick={() => setShowModal(false)} />
                  <Button label='Register' loading={loading} type='green' onClick={_handleRegister} />
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}

export default RegisterModal