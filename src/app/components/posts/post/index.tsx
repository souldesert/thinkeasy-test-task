import {Card, CardContent, CardHeader, Typography} from '@mui/material'
import Link from 'next/link'
import {FC} from 'react'

import {useAuth} from '@/app/hooks/auth'
import {formatDateTime} from '@/app/utils/formatters'

import {PostProps} from './types'

const Post: FC<PostProps> = ({post}) => {
  const {isAuthenticated} = useAuth()

  return (
    <Card variant="outlined">
      <CardHeader
        title={post.title}
        subheader={
          <>
            {isAuthenticated ? (
              <Link href={`/${post.authorId}`}>{post.authorId}</Link>
            ) : (
              post.authorId
            )}
            &nbsp;on&nbsp;
            {formatDateTime(post.createdAt)}
          </>
        }
      />
      <CardContent>
        <Typography variant="body2">{post.content}</Typography>
      </CardContent>
    </Card>
  )
}

export default Post
