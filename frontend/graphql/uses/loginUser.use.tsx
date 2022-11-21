import { useMutation } from '@apollo/client'
import { LOGIN_USER_MUTATION } from '..'

const useLoginUser = (): any[] => {
	const [loginUser, result] = useMutation(LOGIN_USER_MUTATION)

	return [loginUser, result]
}

export default useLoginUser