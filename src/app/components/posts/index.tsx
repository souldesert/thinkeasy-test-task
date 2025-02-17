import {Typography} from '@mui/material'
import {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Virtuoso} from 'react-virtuoso'

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
      <Typography variant="h3" p={2} noWrap>
        {!!userId ? userId : 'All posts'}
      </Typography>

      {arePostsLoading ? (
        <PostsSkeleton />
      ) : (
        <Virtuoso
          data={posts}
          useWindowScroll
          totalCount={posts.length}
          itemContent={(_index, post) => <Post key={post.id} post={post} />}
        />
      )}

      {isAuthenticated && !userId && <Create />}
    </>
  )
}

export default Posts
