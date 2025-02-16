import {Stack, Typography} from '@mui/material'
import {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {useAuth} from '@/app/hooks/auth'
import {RootState} from '@/app/store'
import {postsActions} from '@/app/store/posts'
import {filteredPostsSelector} from '@/app/store/posts/selectors'

import Create from './create'
import Post from './post'
import PostsSkeleton from './skeleton'
import {PostsProps} from './types'

const Posts: FC<PostsProps> = ({userId}) => {
  const {isAuthenticated} = useAuth()

  const dispatch = useDispatch()

  const posts = useSelector(filteredPostsSelector)

  const arePostsLoading = useSelector(
    ({posts}: RootState) => posts.arePostsLoading,
  )

  useEffect(() => {
    if (!!userId) {
      dispatch(postsActions.loadUserPosts(userId))
    } else {
      dispatch(postsActions.loadPosts())
    }
  }, [dispatch, userId])

  return (
    <>
      <Typography variant="h3" marginBottom={2}>
        {!!userId ? `Posts by ${userId}` : 'All posts'}
      </Typography>

      <Stack direction="column" spacing={2}>
        {arePostsLoading ? (
          <PostsSkeleton />
        ) : (
          posts.map((post) => <Post key={post.id} post={post} />)
        )}
      </Stack>

      {isAuthenticated && !userId && <Create />}
    </>
  )
}

export default Posts
