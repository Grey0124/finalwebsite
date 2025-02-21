import { getOrderById } from '@/lib/actions/order.actions'
import { APP_NAME } from '@/lib/constants'
import { notFound } from 'next/navigation'
import OrderDetailsForm from './order-details-form'
import { auth } from '@/auth'

export const metadata = {
  title: `Order Details - ${APP_NAME}`,
}

type Params = Promise<{ id: string }>

const OrderDetailsPage = async ({
  params,
}: {
  params: Params
}) => {
  const session = await auth()
    const {id} = await params
  const order = await getOrderById(id)
  if (!order) notFound()
  order.user
  return (
    <OrderDetailsForm
      order={order}
      paypalClientId={process.env.PAYPAL_CLIENT_ID || 'sb'}
      isAdmin={session?.user.role === 'admin' || false}
    />
  )
}

export default OrderDetailsPage