import {Card, CardContent, CardHeader, Typography} from '@mui/material'
import {FC} from 'react'

import {formatDateTime} from '@/app/utils/formatters'

import {PostProps} from './types'

const Post: FC<PostProps> = ({post}) => {
  return (
    <Card variant="outlined">
      <CardHeader
        title={post.title}
        subheader={`${post.authorId} wrote on ${formatDateTime(post.createdAt)}`}
      />
      <CardContent>
        <Typography variant="body2">{post.content}</Typography>
      </CardContent>
    </Card>
  )
}

export default Post
