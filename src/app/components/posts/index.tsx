import {Stack} from '@mui/material'
import {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {useAuth} from '@/app/hooks/auth'
import {RootState} from '@/app/store'
import {postsActions} from '@/app/store/posts'
import {filteredPostsSelector} from '@/app/store/posts/selectors'

import Create from './create'
import Post from './post'
import PostsSkeleton from './skeleton'

const Posts: FC = () => {
  const {isAuthenticated} = useAuth()

  const dispatch = useDispatch()

  const posts = useSelector(filteredPostsSelector)

  const arePostsLoading = useSelector(
    ({posts}: RootState) => posts.arePostsLoading,
  )

  useEffect(() => {
    dispatch(postsActions.loadPosts())
  }, [dispatch])

  return (
    <>
      <Stack direction="column" spacing={2}>
        {arePostsLoading ? (
          <PostsSkeleton />
        ) : (
          posts.map((post) => <Post key={post.id} post={post} />)
        )}
      </Stack>

      {isAuthenticated && <Create />}
    </>
  )
}

export default Posts
