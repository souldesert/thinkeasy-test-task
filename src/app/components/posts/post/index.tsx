import {Card, CardContent, CardHeader, Typography} from '@mui/material'
import Link from 'next/link'
import {FC} from 'react'

import {formatDateTime} from '@/app/utils/formatters'

import {PostProps} from './types'

const Post: FC<PostProps> = ({post}) => {
  return (
    <Card variant="outlined">
      <CardHeader
        title={post.title}
        subheader={
          <>
            <Link href={`/${post.authorId}`}>{post.authorId}</Link>
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
