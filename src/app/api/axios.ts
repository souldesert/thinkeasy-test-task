import axios, {AxiosRequestConfig} from 'axios'

import {ACCESS_TOKEN} from '@/app/consts/auth'

const AXIOS_INSTANCE = axios.create({
  baseURL: 'https://frontend-test-be.stage.thinkeasy.cz',
})

AXIOS_INSTANCE.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN)

  if (!!accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

export const axiosInstance = <T>(config: AxiosRequestConfig): Promise<T> =>
  AXIOS_INSTANCE.request(config)
