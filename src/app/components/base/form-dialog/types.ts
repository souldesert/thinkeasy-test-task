import {UseFormReturn} from 'react-hook-form-mui'

export interface FormDialogProps {
  title: string
  confirmLabel: string
  open: boolean
  formContext: UseFormReturn<any>
  disabled: boolean
  onSubmit: (data: any) => any
  onClose: VoidFunction
}
