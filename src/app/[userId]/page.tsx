'use client'

import {use} from 'react'

import Posts from '@/app/components/posts'

interface UserPostsPageProps {
  params: Promise<{userId: string}>
}

export default function UserPostsPage({params}: UserPostsPageProps) {
  const {userId} = use(params)

  return <Posts userId={userId} />
}
