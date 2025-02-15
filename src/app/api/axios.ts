import axios, {AxiosRequestConfig} from 'axios'

export const AXIOS_INSTANCE = axios.create({
  baseURL: 'https://frontend-test-be.stage.thinkeasy.cz',
})

AXIOS_INSTANCE.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken')

  if (!!token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export const axiosInstance = <T>(config: AxiosRequestConfig): Promise<T> =>
  AXIOS_INSTANCE.request(config)
