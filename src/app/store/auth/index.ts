import {createSlice} from '@reduxjs/toolkit'

import {authReducers} from './reducers'
import {initialState} from './state'

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: authReducers,
})

export const authActions = authSlice.actions
export default authSlice.reducer
