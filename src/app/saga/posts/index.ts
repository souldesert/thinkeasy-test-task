import {takeLatest} from 'redux-saga/effects'

import {postsActions} from '@/app/store/posts'

import {loadPostsSaga, loadUserPostsSaga} from './sagas'

export function* watchGetPosts() {
  yield takeLatest(postsActions.loadPosts.type, loadPostsSaga)
  yield takeLatest(postsActions.loadUserPosts.type, loadUserPostsSaga)
}
