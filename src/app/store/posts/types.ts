import {CaseReducer, PayloadAction} from '@reduxjs/toolkit'

import {PostResponse} from '@/app/api'

export interface PostsState {
  posts: PostResponse[]
  arePostsLoading: boolean
}

export type PostsReducer<T> = CaseReducer<PostsState, PayloadAction<T>>
