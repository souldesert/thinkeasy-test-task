import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '@/app/saga'

import authReducer from './auth'
import postsReducer from './posts'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
