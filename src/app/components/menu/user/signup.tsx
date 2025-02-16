import {FC, useState} from 'react'
import {TextFieldElement, useForm} from 'react-hook-form-mui'

import {Auth, getAuth} from '@/app/api'
import FormDialog from '@/app/components/base/form-dialog'
import {useAuth} from '@/app/hooks/auth'
import {withTransitionDelay} from '@/app/utils/common'
import {notifyApiResult} from '@/app/utils/notifications'

import {DialogProps, SignupForm} from './types'

const SignupDialog: FC<DialogProps> = ({open, toggleOpen}) => {
  const {authenticate} = useAuth()

  const formContext = useForm<SignupForm>()
  const password = formContext.watch('password')

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = async (data: SignupForm) => {
    setIsLoading(true)

    notifyApiResult(
      async () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {confirmPassword, ...payload} = data

        const {accessToken, refreshToken}: Auth =
          await getAuth().authControllerSignup(payload)

        authenticate(accessToken, refreshToken)
        close()
      },
      'You have signed up',
      'Error signing up',
    )

    setIsLoading(false)
  }

  const close = () => {
    withTransitionDelay(formContext.reset)
    toggleOpen()
  }

  return (
    <FormDialog
      title="Signup"
      confirmLabel="Signup"
      open={open}
      formContext={formContext}
      disabled={isLoading}
      onSubmit={onSubmit}
      onClose={close}
    >
      <TextFieldElement
        name="firstname"
        label="First name"
        disabled={isLoading}
        required
      />
      <TextFieldElement
        name="lastname"
        label="Last name"
        disabled={isLoading}
        required
      />
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
        helperText="Longer than or equal to 8 characters"
        rules={{
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
        }}
        disabled={isLoading}
        required
      />
      <TextFieldElement
        name="confirmPassword"
        type="password"
        label="Confirm password"
        rules={{
          validate: (value) => value === password || 'Passwords do not match',
        }}
        disabled={isLoading}
        required
      />
    </FormDialog>
  )
}

export default SignupDialog
