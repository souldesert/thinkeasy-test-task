'use client'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {FC} from 'react'

import Search from './search'
import UserMenu from './user'

const AppMenu: FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          Think Easy Blog
        </Typography>

        <Search />

        <UserMenu />
      </Toolbar>
    </AppBar>
  )
}

export default AppMenu
