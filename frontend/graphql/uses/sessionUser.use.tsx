import { useQuery } from '@apollo/client'
import { SESSION_USER_QUERY } from '..'

const useSessionUser = (): any => {
	const { loading, error, data, refetch } = useQuery(SESSION_USER_QUERY, { fetchPolicy: 'network-only' })

	return { loading, error, data, refetch }
}

export default useSessionUser