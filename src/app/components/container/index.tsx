import {Container as BaseContainer} from '@mui/material'
import {FC, PropsWithChildren} from 'react'

const Container: FC<PropsWithChildren> = ({children}) => {
  return <BaseContainer maxWidth="lg">{children}</BaseContainer>
}

export default Container
