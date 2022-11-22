import { useMutation } from '@apollo/client'
import { REGISTER_USER_MUTATION } from '..'

const useRegisterUser = (): any[] => {
	const [registerUser, result] = useMutation(REGISTER_USER_MUTATION)

	return [registerUser, result]
}

export default useRegisterUser