import {ThemeOptions} from '@mui/material'

export const containerTheme: ThemeOptions = {
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '6em 0',
        },
      },
    },
  },
}
