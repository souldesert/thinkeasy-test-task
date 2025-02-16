import {ThemeOptions} from '@mui/material'

import {fabTheme as fab} from './components/fab'

export const appThemeOptions: ThemeOptions = {
  components: {
    ...fab.components,
  },
}
