'use client'

import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {RootState} from '@/app/store'
import {authActions} from '@/app/store/auth'
import {
  getAccessToken,
  removeTokens,
  setAccessToken,
  setRefreshToken,
} from '@/app/utils/auth'

export const useAuth = () => {
  const dispatch = useDispatch()

  const isAuthenticated = useSelector(
    ({auth}: RootState) => auth.isAuthenticated,
  )

  useEffect(() => {
    dispatch(authActions.setIsAuthenticated(!!getAccessToken()))
  }, [dispatch])

  const authenticate = (accessToken: string, refreshToken: string) => {
    setAccessToken(accessToken)
    setRefreshToken(refreshToken)

    dispatch(authActions.setIsAuthenticated(true))
  }

  const logout = () => {
    removeTokens()
    dispatch(authActions.setIsAuthenticated(false))
  }

  return {
    isAuthenticated,
    authenticate,
    logout,
  }
}
