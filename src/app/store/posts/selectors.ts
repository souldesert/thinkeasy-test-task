import {createSelector} from '@reduxjs/toolkit'

import {PostResponse} from '@/app/api'

import {RootState} from '..'

export const sortedPostsSelector = createSelector(
  [({posts}: RootState) => posts.posts],
  (posts: PostResponse[]) =>
    [...posts].sort(
      (postA, postB) =>
        Date.parse(postB.updatedAt) - Date.parse(postA.updatedAt),
    ),
)
