'use client'

import { useState, useEffect } from 'react'
import { useLoginUser } from './loginUser.use'
import LoginOrganism from '../components/organisms/login'

const Login = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [login, result] = useLoginUser()

  useEffect(() => {
    setError('')

	if (result.data?.logIn) setData(result.data.logIn)
    if (result.error?.message) setError(result.error.message)

	setLoading(result.loading);
}, [result]);

  const _handleUsername = (event: any) => setUsername(event.target.value)
  const _handlePassword = (event: any) => setPassword(event.target.value)
  const _handleLogin = () => login({ variables: { username, password }}).catch(e => console.log(e))

  return (
    <>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="username" className="text-black block mb-2 text-sm font-medium text-gray-900">Username / Email</label>
          <input type='text' id='username' onChange={_handleUsername} value={username} required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
        <div>
          <label htmlFor="password" className="text-black block mb-2 text-sm font-medium text-gray-900">Password</label>
          <input type='text' id='password' onChange={_handlePassword} value={password} required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
      </div>
      <button onClick={_handleLogin} disabled={loading} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{ loading ? 'Loading...' : 'Login'}</button>
      <h1 className='text-3xl font-bold'>
        { data && !error && <>Token: {data.viewer.sessionToken}</> }
        { error && <>Error: {error}</>}
      </h1>
    </>
  )
}

export default Login