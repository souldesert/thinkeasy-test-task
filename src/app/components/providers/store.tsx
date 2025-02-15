'use client'

import {FC, PropsWithChildren} from 'react'
import {Provider} from 'react-redux'

import {store} from '@/app/store'

const StoreProvider: FC<PropsWithChildren> = ({children}) => {
  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
