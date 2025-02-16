import {CaseReducer, PayloadAction} from '@reduxjs/toolkit'

import {PostResponse} from '@/app/api'

export interface PostsState {
  posts: PostResponse[]
  arePostsLoading: boolean
  search: string
}

export type PostsReducer<T> = CaseReducer<PostsState, PayloadAction<T>>
