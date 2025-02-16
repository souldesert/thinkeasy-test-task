import {createTheme} from '@mui/material'

import {containerTheme as container} from './components/container'
import {fabTheme as fab} from './components/fab'

export const appTheme = createTheme({
  components: {
    ...container.components,
    ...fab.components,
  },
})
