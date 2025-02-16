import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

import {API_BASE_URL} from '@/app/consts/common'
import {
  getAccessToken,
  getRefreshToken,
  removeTokens,
  setAccessToken,
} from '@/app/utils/auth'
import {notifyError} from '@/app/utils/notifications'

import {getAuth} from './auth/auth'

import {RefreshResponceModel} from '.'

const AXIOS_INSTANCE = axios.create({
  baseURL: API_BASE_URL,
})

const handleAuthError = (error: any) => {
  removeTokens()
  notifyError('Please login', 'Authentication error')
  return Promise.reject(error)
}

AXIOS_INSTANCE.interceptors.request.use((config) => {
  const accessToken = getAccessToken()

  if (!!accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

// Flag to prevent multiple token refresh requests
let isRefreshing = false

AXIOS_INSTANCE.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !isRefreshing) {
      const refreshToken = getRefreshToken()

      if (!refreshToken) {
        return handleAuthError(error)
      }

      isRefreshing = true

      try {
        // @ts-expect-error TODO поправить
        const {
          data: {access_token},
        }: AxiosResponse<RefreshResponceModel> =
          await getAuth().authControllerRefreshToken({
            token: refreshToken,
          })

        setAccessToken(access_token)

        originalRequest.headers.Authorization = `Bearer ${access_token}`
        return AXIOS_INSTANCE(originalRequest)
      } catch (refreshError) {
        return handleAuthError(refreshError)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  },
)

export const axiosInstance = <T>(config: AxiosRequestConfig): Promise<T> =>
  AXIOS_INSTANCE.request(config)
