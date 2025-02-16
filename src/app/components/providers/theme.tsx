'use client'

import {createTheme, ThemeProvider as Provider} from '@mui/material'
import {FC, PropsWithChildren} from 'react'

import {appThemeOptions} from '@/app/theme'

const appTheme = createTheme(appThemeOptions)

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
  return <Provider theme={appTheme}>{children}</Provider>
}

export default ThemeProvider
