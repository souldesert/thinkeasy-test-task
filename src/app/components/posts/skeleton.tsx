import {Card, CardContent, CardHeader, Skeleton} from '@mui/material'
import {FC, Fragment} from 'react'

const SKELETON_PLACEHOLDERS_COUNT = 10

const PostsSkeleton: FC = () => {
  const postSkeleton = (
    <Card variant="outlined">
      <CardHeader
        title={<Skeleton variant="text" width="80%" />}
        subheader={<Skeleton variant="text" width="40%" />}
      />
      <CardContent>
        <>
          <Skeleton variant="text" />
          <Skeleton variant="text" width="80%" />
        </>
      </CardContent>
    </Card>
  )

  return [...Array(SKELETON_PLACEHOLDERS_COUNT)].map((_, index) => (
    <Fragment key={index}>{postSkeleton}</Fragment>
  ))
}

export default PostsSkeleton
