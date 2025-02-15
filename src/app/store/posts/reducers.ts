import {PostResponse} from '@/app/api'

import {PostsReducer} from './types'

const setPosts: PostsReducer<PostResponse[]> = (state, {payload}) => {
  state.arePostsLoading = false
  state.posts = payload
}

const loadPosts: PostsReducer<void> = (state) => {
  state.arePostsLoading = true
}

export const postsReducers = {
  setPosts,
  loadPosts,
}
