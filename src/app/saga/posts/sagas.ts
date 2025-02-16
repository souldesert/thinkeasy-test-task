import {call, put, select} from 'redux-saga/effects'

import {getPosts, PostResponse} from '@/app/api'
import {postsActions} from '@/app/store/posts'
import {selectAuthorId} from '@/app/store/posts/selectors'

export function* loadPostsSaga() {
  try {
    const data: PostResponse[] = yield call(
      getPosts().postsControllerGetAllPosts,
    )

    yield put(postsActions.setPosts(data))
  } catch {
    yield put(postsActions.setPosts([]))
  }
}

export function* loadUserPostsSaga() {
  const authorId: string = yield select(selectAuthorId)

  try {
    const posts: PostResponse[] = yield call(() =>
      getPosts().postsControllerUserPosts(authorId),
    )

    yield put(postsActions.setPosts(posts))
  } catch {
    yield put(postsActions.setPosts([]))
  }
}
