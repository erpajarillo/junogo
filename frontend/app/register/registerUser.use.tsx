import { useMutation } from '@apollo/client'
import { REGISTER_USER_MUTATION } from '../../graphql'

export const useRegisterUser = (): any[] => {
	const [registerUser, result] = useMutation(REGISTER_USER_MUTATION)

	return [registerUser, result]
}