import {Box} from '@mui/material'
import {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {RootState} from '@/app/store'
import {postsActions} from '@/app/store/posts'

const Posts: FC = () => {
  const dispatch = useDispatch()

  const posts = useSelector(({posts}: RootState) => posts.posts)

  useEffect(() => {
    dispatch(postsActions.loadPosts())
  }, [dispatch])

  return (
    <Box component="main">
      <pre>{JSON.stringify(posts, null, 4)}</pre>
    </Box>
  )
}

export default Posts
