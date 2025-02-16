import {FC} from 'react'
import {
  TextareaAutosizeElement,
  TextFieldElement,
  useForm,
} from 'react-hook-form-mui'
import {useDispatch} from 'react-redux'

import {CreatePostInput, getPosts} from '@/app/api'
import FormDialog from '@/app/components/base/form-dialog'
import {postsActions} from '@/app/store/posts'

import {CreateDialogProps} from './types'

const CreateDialog: FC<CreateDialogProps> = ({open, toggleOpen}) => {
  const dispatch = useDispatch()

  const formContext = useForm<CreatePostInput>()

  const onSubmit = async (data: CreatePostInput) => {
    console.log(data)
    await getPosts().postsControllerCreate(data)
    dispatch(postsActions.loadPosts())
    toggleOpen()
  }

  return (
    <FormDialog
      title="Create a post"
      confirmLabel="Save"
      open={open}
      formContext={formContext}
      onSubmit={onSubmit}
      onClose={toggleOpen}
    >
      <TextFieldElement name="title" label="Title" required />
      <TextareaAutosizeElement
        name="content"
        label="Content"
        resizeStyle="vertical"
        rows={3}
        required
      />
    </FormDialog>
  )
}

export default CreateDialog
