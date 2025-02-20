import { carts, products } from '@/db/schema'
import { InferSelectModel } from 'drizzle-orm'
import {
    cartItemSchema,
    paymentResultSchema,
    shippingAddressSchema,
  } from '@/lib/validator'
import { z } from 'zod'

// PRODUCTS
export type Product = InferSelectModel<typeof products>

//CART
export type Cart = InferSelectModel<typeof carts>
export type CartItem = z.infer<typeof cartItemSchema>

export type ShippingAddress = z.infer<typeof shippingAddressSchema>
export type PaymentResult = z.infer<typeof paymentResultSchema>