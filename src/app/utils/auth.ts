import {ACCESS_TOKEN, REFRESH_TOKEN} from '../consts/auth'

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN)
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN)

export const setAccessToken = (token: string) =>
  localStorage.setItem(ACCESS_TOKEN, token)

export const setRefreshToken = (token: string) =>
  localStorage.setItem(REFRESH_TOKEN, token)

export const removeTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN)
  localStorage.removeItem(REFRESH_TOKEN)
}
