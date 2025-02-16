import {AxiosResponse} from 'axios'
import {call, put, select} from 'redux-saga/effects'

import {getPosts, PostResponse} from '@/app/api'
import {postsActions} from '@/app/store/posts'
import {selectAuthorId} from '@/app/store/posts/selectors'

export function* loadPostsSaga() {
  try {
    const {data}: AxiosResponse<PostResponse[]> = yield call(
      getPosts().postsControllerGetAllPosts,
    )

    yield put(postsActions.setPosts(data))
  } catch {
    // TODO добавить обработку ошибок
    yield put(postsActions.setPosts([]))
  }
}

export function* loadUserPostsSaga() {
  const authorId: string = yield select(selectAuthorId)

  try {
    const {data}: AxiosResponse<PostResponse[]> = yield call(() =>
      getPosts().postsControllerUserPosts(authorId),
    )

    yield put(postsActions.setPosts(data))
  } catch {
    // TODO добавить обработку ошибок
    yield put(postsActions.setPosts([]))
  }
}
