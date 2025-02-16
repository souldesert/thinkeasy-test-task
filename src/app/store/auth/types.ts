import {CaseReducer, PayloadAction} from '@reduxjs/toolkit'

export interface AuthState {
  isAuthenticated: boolean
}

export type AuthReducer<T> = CaseReducer<AuthState, PayloadAction<T>>
