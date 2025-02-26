import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import ProductForm from '@/components/shared/admin/product-form'
import { getProductById } from '@/lib/actions/product.actions'
import { APP_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Update product - ${APP_NAME}`,
}

type Params = Promise<{ id: string }>

export default async function UpdateProductPage(props:{
    params: Params
}) {
    const params = await props.params
  const product = await getProductById(params.id)
  if (!product) notFound()
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h1 className="h2-bold">Update Product</h1>
      <ProductForm type="Update" product={product} productId={product.id} />
    </div>
  )
}