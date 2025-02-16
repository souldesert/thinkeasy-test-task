import {ThemeOptions} from '@mui/material'

import {containerTheme as container} from './components/container'
import {fabTheme as fab} from './components/fab'

export const appThemeOptions: ThemeOptions = {
  components: {
    ...container.components,
    ...fab.components,
  },
}
