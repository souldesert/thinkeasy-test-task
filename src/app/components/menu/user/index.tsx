'use client'

import AccountCircle from '@mui/icons-material/AccountCircle'
import Login from '@mui/icons-material/Login'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {FC, useState} from 'react'

import {useAuth} from '@/app/hooks/auth'
import {notifySuccess} from '@/app/utils/notifications'

import LoginDialog from './login'
import SignupDialog from './signup'

const UserMenu: FC = () => {
  const {isAuthenticated, logout} = useAuth()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const [loginOpen, setLoginOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)

  const toggleLoginOpen = () => {
    setLoginOpen((open) => !open)
  }

  const toggleSignupOpen = () => {
    setSignupOpen((open) => !open)
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogin = () => {
    toggleLoginOpen()
    handleClose()
  }

  const handleSignup = () => {
    toggleSignupOpen()
    handleClose()
  }

  const handleLogout = () => {
    logout()
    notifySuccess('You have logged out')
    handleClose()
  }

  return (
    <>
      <IconButton size="large" onClick={handleMenu} color="inherit">
        {isAuthenticated ? <AccountCircle /> : <Login />}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={!!anchorEl}
        onClose={handleClose}
      >
        {isAuthenticated ? (
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        ) : (
          [
            <MenuItem key="login" onClick={handleLogin}>
              Login
            </MenuItem>,
            <MenuItem key="signup" onClick={handleSignup}>
              Signup
            </MenuItem>,
          ]
        )}
      </Menu>

      <LoginDialog open={loginOpen} toggleOpen={toggleLoginOpen} />
      <SignupDialog open={signupOpen} toggleOpen={toggleSignupOpen} />
    </>
  )
}

export default UserMenu
