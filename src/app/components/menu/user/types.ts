import {SignupInput} from '@/app/api'

// TODO duplicated code
export interface DialogProps {
  open: boolean
  toggleOpen: VoidFunction
}

export type SignupForm = SignupInput & {
  confirmPassword: SignupInput['password']
}
