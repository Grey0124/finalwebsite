import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getMyCart } from '@/lib/actions/cart.actions'

export default async function CartButton() {
  const cart = await getMyCart()
  return (
    <div className="flex items-center gap-2">
      {/* New Button for Web3 App */}
      <Button asChild variant="ghost">
        <Link href="https://web3cfapp-six.vercel.app/" target="_blank">
          Crowd Funding
        </Link>
      </Button>

      {/* Cart Button */}
      <Button asChild variant="ghost">
        <Link href="/cart">
          <ShoppingCart className="mr-1" />
          Cart
          {cart && cart.items.length > 0 && (
            <Badge className="ml-1">
              {cart.items.reduce((a, c) => a + c.qty, 0)}
            </Badge>
          )}
        </Link>
      </Button>
    </div>
  )
}