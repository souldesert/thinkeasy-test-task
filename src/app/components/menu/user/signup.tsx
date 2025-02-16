import {AxiosResponse} from 'axios'
import {FC, useState} from 'react'
import {TextFieldElement, useForm} from 'react-hook-form-mui'

import {Auth, getAuth} from '@/app/api'
import FormDialog from '@/app/components/base/form-dialog'
import {useAuth} from '@/app/hooks/auth'

import {DialogProps, SignupForm} from './types'

const SignupDialog: FC<DialogProps> = ({open, toggleOpen}) => {
  const {authenticate} = useAuth()

  const formContext = useForm<SignupForm>()
  const password = formContext.watch('password')

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = async (data: SignupForm) => {
    setIsLoading(true)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {confirmPassword, ...payload} = data

    // @ts-expect-error TODO поправить
    const {
      data: {accessToken, refreshToken},
    }: AxiosResponse<Auth> = await getAuth().authControllerSignup(payload)

    authenticate(accessToken, refreshToken)

    setIsLoading(false)
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
      onClose={toggleOpen}
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
