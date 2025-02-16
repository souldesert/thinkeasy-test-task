import {createSelector} from '@reduxjs/toolkit'

import {includesLowercase} from '@/app/utils/common'

import {RootState} from '..'

const selectPosts = ({posts}: RootState) => posts.posts
const selectQuery = ({posts}: RootState) => posts.search

// Ideally, this should be done on the backend
export const filteredPostsSelector = createSelector(
  [selectPosts, selectQuery],
  (posts, query) => {
    return (
      posts
        // Perform text search
        .filter(
          ({title, content}) =>
            includesLowercase(title, query) ||
            includesLowercase(content, query),
        )
        // Sort posts by latest
        .sort(
          (postA, postB) =>
            Date.parse(postB.updatedAt) - Date.parse(postA.updatedAt),
        )
    )
  },
)
