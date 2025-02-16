'use client'

import AccountCircle from '@mui/icons-material/AccountCircle'
import Login from '@mui/icons-material/Login'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {FC, useState} from 'react'

import {useAuth} from '@/app/hooks/auth'

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
    // TODO do another way
    setSignupOpen(!signupOpen)
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
        {/* TODO переделать */}
        {isAuthenticated && <MenuItem onClick={handleLogout}>Logout</MenuItem>}
        {!isAuthenticated && <MenuItem onClick={handleLogin}>Login</MenuItem>}
        {!isAuthenticated && <MenuItem onClick={handleSignup}>Signup</MenuItem>}
      </Menu>

      <LoginDialog open={loginOpen} toggleOpen={toggleLoginOpen} />
      <SignupDialog open={signupOpen} toggleOpen={toggleSignupOpen} />
    </>
  )
}

export default UserMenu
