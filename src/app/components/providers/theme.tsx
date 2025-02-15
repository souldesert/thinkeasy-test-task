'use client'

import {ThemeProvider as Provider} from '@mui/material'
import {FC, PropsWithChildren} from 'react'

import {appTheme} from '@/app/theme'

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
  return <Provider theme={appTheme}>{children}</Provider>
}

export default ThemeProvider
