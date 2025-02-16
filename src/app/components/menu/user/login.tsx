import {FC, useState} from 'react'
import {TextFieldElement, useForm} from 'react-hook-form-mui'

import {Auth, getAuth, LoginInput} from '@/app/api'
import FormDialog from '@/app/components/base/form-dialog'
import {useAuth} from '@/app/hooks/auth'
import {withTransitionDelay} from '@/app/utils/common'
import {notifyApiResult} from '@/app/utils/notifications'

import {DialogProps} from './types'

const LoginDialog: FC<DialogProps> = ({open, toggleOpen}) => {
  const {authenticate} = useAuth()

  const formContext = useForm<LoginInput>()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = async (data: LoginInput) => {
    setIsLoading(true)

    notifyApiResult(
      async () => {
        const {accessToken, refreshToken}: Auth =
          await getAuth().authControllerLogin(data)

        authenticate(accessToken, refreshToken)
        close()
      },
      'You have logged in',
      'Error logging in',
    )

    setIsLoading(false)
  }

  const close = () => {
    withTransitionDelay(formContext.reset)
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
      onClose={close}
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
