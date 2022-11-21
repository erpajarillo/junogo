import { client, SESSION_USER_QUERY } from '..'

const sessionUser = async (): Promise<any> => {
	const data = await client.query({ query: SESSION_USER_QUERY })

	return data
}

export default sessionUser