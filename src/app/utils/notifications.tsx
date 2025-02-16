import {Typography} from '@mui/material'
import {toast, TypeOptions} from 'react-toastify'

export const notifySuccess = (content: string, title?: string) => {
  notify(content, 'success', title)
}

export const notifyInfo = (content: string, title?: string) => {
  notify(content, 'info', title)
}

export const notifyError = (content: string, title?: string) => {
  notify(content, 'error', title)
}

export const notifyApiResult = async (
  apiCall: () => Promise<void>,
  successMessage: string,
  errorTitle: string,
) => {
  try {
    await apiCall()
    notifySuccess(successMessage)
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'An error occurred'
    notifyError(errorMessage, errorTitle)
  }
}

const notify = (content: string, type: TypeOptions, title?: string) => {
  toast(
    <div>
      {!!title && <Typography variant="subtitle1">{title}</Typography>}
      <Typography variant="body2">{content}</Typography>
    </div>,
    {type},
  )
}
