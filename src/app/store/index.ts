import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '@/app/saga'

import postsReducer from './posts'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
