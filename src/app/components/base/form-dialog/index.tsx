import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from '@mui/material'
import {FC, PropsWithChildren} from 'react'
import {FormContainer} from 'react-hook-form-mui'

import {FormDialogProps} from './types'

type Props = PropsWithChildren<FormDialogProps>

const FormDialog: FC<Props> = ({
  title,
  confirmLabel,
  open,
  formContext,
  disabled,
  onSubmit,
  onClose,
  children,
}) => {
  const handleClose = () => {
    onClose()
  }

  const handleSubmit = (data: any) => {
    onSubmit(data)
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <FormContainer formContext={formContext} onSuccess={handleSubmit}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Stack direction="column" spacing={2}>
            {children}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} disabled={disabled}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={!formContext.formState.isValid || disabled}
          >
            {confirmLabel}
          </Button>
        </DialogActions>
      </FormContainer>
    </Dialog>
  )
}

export default FormDialog
