import {AxiosResponse} from 'axios'
import {FC, useState} from 'react'
import {TextFieldElement, useForm} from 'react-hook-form-mui'

import {Auth, getAuth, LoginInput} from '@/app/api'
import FormDialog from '@/app/components/base/form-dialog'
import {useAuth} from '@/app/hooks/auth'

import {DialogProps} from './types'

const LoginDialog: FC<DialogProps> = ({open, toggleOpen}) => {
  const {authenticate} = useAuth()

  const formContext = useForm<LoginInput>()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = async (data: LoginInput) => {
    setIsLoading(true)

    // @ts-expect-error TODO поправить
    const {
      data: {accessToken, refreshToken},
    }: AxiosResponse<Auth> = await getAuth().authControllerLogin(data)

    authenticate(accessToken, refreshToken)

    setIsLoading(false)
    toggleOpen()
  }

  return (
    <FormDialog
      title="Login"
      confirmLabel="Login"
      open={open}
      formContext={formContext}
      disabled={isLoading}
      onSubmit={onSubmit}
      onClose={toggleOpen}
    >
      <TextFieldElement
        name="email"
        label="Email"
        disabled={isLoading}
        required
      />
      <TextFieldElement
        name="password"
        type="password"
        label="Password"
        disabled={isLoading}
        required
      />
    </FormDialog>
  )
}

export default LoginDialog
