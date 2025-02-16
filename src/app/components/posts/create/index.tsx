import EditIcon from '@mui/icons-material/Edit'
import {Fab} from '@mui/material'
import {FC, useState} from 'react'

import CreateDialog from './dialog'

const Create: FC = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen((open) => !open)
  }

  return (
    <>
      <Fab color="primary" size="large" onClick={toggleOpen}>
        <EditIcon />
      </Fab>

      <CreateDialog open={open} toggleOpen={toggleOpen} />
    </>
  )
}

export default Create
