import {Container as BaseContainer} from '@mui/material'
import {FC, PropsWithChildren} from 'react'

const Container: FC<PropsWithChildren> = ({children}) => {
  return (
    <BaseContainer maxWidth="lg" component="main">
      {children}
    </BaseContainer>
  )
}

export default Container
