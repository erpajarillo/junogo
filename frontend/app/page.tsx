import client from '../graphql/client'
import { CHECK_HEALTH } from '../graphql/checkHealth'

const Home = async () => {
  const { loading, error, data } = await client.query({ query: CHECK_HEALTH })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <h1 className='text-3xl font-bold underline'>
        Parse Server Status: {data.health ? 'OK' : 'NOK'}
      </h1>
    </>
  )
}

export default Home