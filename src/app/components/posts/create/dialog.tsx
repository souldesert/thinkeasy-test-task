import {FC, useState} from 'react'
import {
  TextareaAutosizeElement,
  TextFieldElement,
  useForm,
} from 'react-hook-form-mui'
import {useDispatch} from 'react-redux'

import {CreatePostInput, getPosts} from '@/app/api'
import FormDialog from '@/app/components/base/form-dialog'
import {postsActions} from '@/app/store/posts'
import {withTransitionDelay} from '@/app/utils/common'
import {notifyApiResult} from '@/app/utils/notifications'

import {CreateDialogProps} from './types'

const CreateDialog: FC<CreateDialogProps> = ({open, toggleOpen}) => {
  const dispatch = useDispatch()

  const formContext = useForm<CreatePostInput>()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = async (data: CreatePostInput) => {
    setIsLoading(true)

    notifyApiResult(
      async () => {
        await getPosts().postsControllerCreate(data)
        dispatch(postsActions.loadPosts())

        close()
      },
      'Post have been saved',
      'Error saving post',
    )

    setIsLoading(false)
  }

  const close = () => {
    withTransitionDelay(formContext.reset)
    toggleOpen()
  }

  return (
    <FormDialog
      title="Create a post"
      confirmLabel="Save"
      open={open}
      formContext={formContext}
      disabled={isLoading}
      onSubmit={onSubmit}
      onClose={close}
    >
      <TextFieldElement
        name="title"
        label="Title"
        disabled={isLoading}
        required
      />
      <TextareaAutosizeElement
        name="content"
        label="Content"
        resizeStyle="vertical"
        rows={3}
        disabled={isLoading}
        required
      />
    </FormDialog>
  )
}

export default CreateDialog
