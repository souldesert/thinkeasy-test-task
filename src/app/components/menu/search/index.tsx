'use client'

import {debounce} from '@mui/material'
import {FC, useEffect, useMemo} from 'react'
import {FormContainer, useForm} from 'react-hook-form-mui'
import {useDispatch} from 'react-redux'

import {APP_DEBOUNCE_DELAY} from '@/app/consts/common'
import {postsActions} from '@/app/store/posts'

import {SearchField} from './search-field'
import {SearchForm} from './types'

const Search: FC = () => {
  const formContext = useForm<SearchForm>()

  const dispatch = useDispatch()

  const searchDebounced = useMemo(
    () =>
      debounce((query?: string) => {
        dispatch(postsActions.setSearch(query ?? ''))
        dispatch(postsActions.setArePostsLoading(false))
      }, APP_DEBOUNCE_DELAY),
    [dispatch],
  )

  useEffect(() => {
    const filtersWatcher = formContext.watch(({search}) => {
      dispatch(postsActions.setArePostsLoading(true))
      searchDebounced(search)
    })

    return () => filtersWatcher.unsubscribe()
  }, [formContext, searchDebounced, dispatch])

  return (
    <FormContainer
      formContext={formContext}
      onSuccess={(data) => console.log(data)}
    >
      <SearchField name="search" />
    </FormContainer>
  )
}

export default Search
