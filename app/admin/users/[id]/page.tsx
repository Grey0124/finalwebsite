import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getUserById } from '@/lib/actions/user.actions'
import { APP_NAME } from '@/lib/constants'

import UpdateUserForm from './update-user-form'

export const metadata: Metadata = {
  title: `Update user - ${APP_NAME}`,
}

type Params = Promise<{ id: string }>

export default async function UpdateUserPage(props:{
    params: Params
}) {
    const params = await props.params
  const user = await getUserById(params.id)
  if (!user) notFound()
  return (
    <div className="space-y-8 max-w-lg mx-auto">
      <h1 className="h2-bold">Update User</h1>
      <UpdateUserForm user={user} />
    </div>
  )
}