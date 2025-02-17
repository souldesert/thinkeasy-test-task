import {SignupInput} from '@/app/api'

export type SignupForm = SignupInput & {
  confirmPassword: SignupInput['password']
}
