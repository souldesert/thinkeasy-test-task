import {Box} from '@mui/material'
import {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {RootState} from '@/app/store'
import {postsActions} from '@/app/store/posts'

import Post from './post'
import styles from './styles.module.css'

const Posts: FC = () => {
  const dispatch = useDispatch()

  const postsSorted = useSelector(({posts}: RootState) =>
    posts.posts.toSorted(
      (postA, postB) =>
        Date.parse(postB.updatedAt) - Date.parse(postA.updatedAt),
    ),
  )

  useEffect(() => {
    dispatch(postsActions.loadPosts())
  }, [dispatch])

  return (
    <Box component="main">
      <Box className={styles.container}>
        {postsSorted.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Box>
    </Box>
  )
}

export default Posts
