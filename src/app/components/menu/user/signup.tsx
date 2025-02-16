import {AxiosResponse} from 'axios'
import {FC} from 'react'
import {TextFieldElement, useForm} from 'react-hook-form-mui'

import {Auth, getAuth, SignupInput} from '@/app/api'
import FormDialog from '@/app/components/base/form-dialog'
import {useAuth} from '@/app/hooks/auth'

import {DialogProps} from './types'

const SignupDialog: FC<DialogProps> = ({open, toggleOpen}) => {
  const {authenticate} = useAuth()

  const formContext = useForm<SignupInput>()

  const onSubmit = async (data: SignupInput) => {
    console.log(data)

    // @ts-expect-error TODO поправить
    const {
      data: {accessToken, refreshToken},
    }: AxiosResponse<Auth> = await getAuth().authControllerSignup(data)

    authenticate(accessToken, refreshToken)

    toggleOpen()
  }

  return (
    <FormDialog
      title="Signup"
      confirmLabel="Signup"
      open={open}
      formContext={formContext}
      onSubmit={onSubmit}
      onClose={toggleOpen}
    >
      <TextFieldElement name="firstname" label="First name" required />
      <TextFieldElement name="lastname" label="Last name" required />
      <TextFieldElement name="email" label="Email" required />
      <TextFieldElement name="password" label="Password" required />
    </FormDialog>
  )
}

export default SignupDialog
