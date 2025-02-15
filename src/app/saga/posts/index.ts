import {takeLatest} from 'redux-saga/effects'

import {postsActions} from '@/app/store/posts'

import {loadPostsSaga} from './sagas'

export function* watchGetPosts() {
  yield takeLatest(postsActions.loadPosts.type, loadPostsSaga)
}
