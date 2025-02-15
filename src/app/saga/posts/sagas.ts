import {call, put} from 'redux-saga/effects'

import {getPosts, PostResponse} from '@/app/api'
import {postsActions} from '@/app/store/posts'

export function* loadPostsSaga() {
  try {
    const posts: PostResponse[] = yield call(
      getPosts().postsControllerGetAllPosts,
    )

    yield put(postsActions.setPosts(posts))
  } catch {
    // TODO добавить обработку ошибок
    yield put(postsActions.setPosts([]))
  }
}
