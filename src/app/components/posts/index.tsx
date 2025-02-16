import {Stack} from '@mui/material'
import {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {useAuth} from '@/app/hooks/auth'
import {postsActions} from '@/app/store/posts'
import {sortedPostsSelector} from '@/app/store/posts/selectors'

import Create from './create'
import Post from './post'

const Posts: FC = () => {
  const {isAuthenticated} = useAuth()

  const dispatch = useDispatch()

  const posts = useSelector(sortedPostsSelector)

  useEffect(() => {
    dispatch(postsActions.loadPosts())
  }, [dispatch])

  return (
    <>
      <Stack direction="column" spacing={2}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Stack>

      {isAuthenticated && <Create />}
    </>
  )
}

export default Posts
