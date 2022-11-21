import { useMutation } from '@apollo/client'
import { LOGOUT_USER_MUTATION } from '..'

const useLogoutUser = (): any[] => {
	const [logoutUser, result] = useMutation(LOGOUT_USER_MUTATION)

	return [logoutUser, result]
}

export default useLogoutUser