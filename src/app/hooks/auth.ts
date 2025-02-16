'use client'

import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {ACCESS_TOKEN, REFRESH_TOKEN} from '@/app/consts/auth'
import {RootState} from '@/app/store'
import {authActions} from '@/app/store/auth'

export const useAuth = () => {
  const dispatch = useDispatch()

  const isAuthenticated = useSelector(
    ({auth}: RootState) => auth.isAuthenticated,
  )

  useEffect(() => {
    dispatch(
      authActions.setIsAuthenticated(!!localStorage.getItem(ACCESS_TOKEN)),
    )
  }, [dispatch])

  const authenticate = (accessToken: string, refreshToken: string) => {
    localStorage.setItem(ACCESS_TOKEN, accessToken)
    localStorage.setItem(REFRESH_TOKEN, refreshToken)

    dispatch(authActions.setIsAuthenticated(true))
  }

  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN)
    localStorage.removeItem(REFRESH_TOKEN)

    dispatch(authActions.setIsAuthenticated(false))
  }

  return {
    isAuthenticated,
    authenticate,
    logout,
  }
}
