import {AxiosResponse} from 'axios'
import {FC} from 'react'
import {TextFieldElement, useForm} from 'react-hook-form-mui'

import {Auth, getAuth, LoginInput} from '@/app/api'
import FormDialog from '@/app/components/base/form-dialog'
import {useAuth} from '@/app/hooks/auth'

import {DialogProps} from './types'

const LoginDialog: FC<DialogProps> = ({open, toggleOpen}) => {
  const {authenticate} = useAuth()

  const formContext = useForm<LoginInput>()

  const onSubmit = async (data: LoginInput) => {
    console.log(data)

    // @ts-expect-error TODO поправить
    const {
      data: {accessToken, refreshToken},
    }: AxiosResponse<Auth> = await getAuth().authControllerLogin(data)

    authenticate(accessToken, refreshToken)

    toggleOpen()
  }

  return (
    <FormDialog
      title="Login"
      confirmLabel="Login"
      open={open}
      formContext={formContext}
      onSubmit={onSubmit}
      onClose={toggleOpen}
    >
      <TextFieldElement name="email" label="Email" required />
      <TextFieldElement name="password" label="Password" required />
    </FormDialog>
  )
}

export default LoginDialog
