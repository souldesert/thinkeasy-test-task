import {createSlice} from '@reduxjs/toolkit'

import {postsReducers} from './reducers'
import {initialState} from './state'

const postsSlice = createSlice({
  name: 'Posts',
  initialState,
  reducers: postsReducers,
})

export const postsActions = postsSlice.actions
export default postsSlice.reducer
