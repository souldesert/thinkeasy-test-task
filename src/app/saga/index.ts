import {all, fork} from 'redux-saga/effects'

import {watchGetPosts} from './posts'

const rootSaga = function* () {
  yield all([fork(watchGetPosts)])
}

export default rootSaga
