import {AuthReducer} from './types'

const setIsAuthenticated: AuthReducer<boolean> = (state, {payload}) => {
  state.isAuthenticated = payload
}

export const authReducers = {
  setIsAuthenticated,
}
