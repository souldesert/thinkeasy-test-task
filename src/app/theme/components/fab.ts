import {ThemeOptions} from '@mui/material'

export const fabTheme: ThemeOptions = {
  components: {
    MuiFab: {
      styleOverrides: {
        root: {
          position: 'fixed',
          bottom: 24,
          right: 24,
        },
      },
    },
  },
}
