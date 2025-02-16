'use client'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import {FC} from 'react'

import Search from './search'
import UserMenu from './user'

const AppMenu: FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          <Link href="/" style={{textDecoration: 'none'}}>
            Think Easy Blog
          </Link>
        </Typography>

        <Search />

        <UserMenu />
      </Toolbar>
    </AppBar>
  )
}

export default AppMenu
