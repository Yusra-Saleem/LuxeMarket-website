'use client'

import { useCart } from '@/components/CartProvider'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-playfair font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="bg-secondary rounded-lg shadow-md p-6 mb-8">
            {cart.map((item) => (
              <motion.div 
                key={item.id} 
                className="flex justify-between items-center mb-4 pb-4 border-b"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500 font-medium">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 font-medium hover:text-red-700 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Total: ${total.toFixed(2)}</h2>
            <button 
              onClick={clearCart}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Clear Cart
            </button>
          </div>
          <Link href="/checkout">
          <motion.button
            className="bg-accent text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#355f4f] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Proceed to Checkout
          </motion.button>
          </Link>
        </>
      )}
    </div>
  )
}

