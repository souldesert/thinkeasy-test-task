import {PostResponse} from '@/app/api'

import {PostsReducer} from './types'

const setPosts: PostsReducer<PostResponse[]> = (state, {payload}) => {
  state.arePostsLoading = false
  state.posts = payload
}

const setArePostsLoading: PostsReducer<boolean> = (state, {payload}) => {
  state.arePostsLoading = payload
}

const loadPosts: PostsReducer<void> = (state) => {
  state.arePostsLoading = true
  state.authorId = ''
}

const loadUserPosts: PostsReducer<string> = (state, {payload}) => {
  state.arePostsLoading = true
  state.authorId = payload
}

const setSearch: PostsReducer<string> = (state, {payload}) => {
  state.search = payload
}

export const postsReducers = {
  setPosts,
  loadPosts,
  loadUserPosts,
  setSearch,
  setArePostsLoading,
}
