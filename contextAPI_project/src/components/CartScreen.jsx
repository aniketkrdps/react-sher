import React, { useContext } from 'react'
import { MyStore } from '../context/ContextAPI'

const CartScreen = ({ setCartScreen }) => {
    let {cartItems} = useContext(MyStore)
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal >= 100 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <span className="text-6xl">🛒</span>
        <h2 className="mt-6 text-xl font-semibold text-gray-900">Your cart is empty</h2>
        <p className="mt-2 max-w-sm text-sm text-gray-500">
          Looks like you haven't added anything yet. Have a browse and find something you like.
        </p>
        <button
          onClick={() => setCartScreen?.(false)}
          className="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Continue Shopping
        </button>
      </div>
    )
  }



  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <div className="flex items-baseline justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
        <span className="text-sm text-gray-500">
          {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
        </span>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-lg bg-gray-50 p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full max-w-full object-contain mix-blend-multiply"
                />
              </div>

              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="line-clamp-2 text-sm font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-[11px] uppercase tracking-wide text-gray-400">{item.category}</p>
                  </div>
                  <button
                    
                    className="shrink-0 text-gray-400 transition hover:text-red-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-auto flex items-end justify-between pt-3">
                  <div className="flex items-center rounded-lg border border-gray-200">
                    <button
                      
                      disabled={item.quantity === 1}
                      className="px-3 py-1.5 text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-300"
                    >
                      −
                    </button>
                    <span className="w-10 text-center text-sm font-medium text-gray-900">
                      {item.quantity}
                    </span>
                    <button
                      
                      className="px-3 py-1.5 text-gray-600 transition hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-base font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    {item.quantity > 1 && (
                      <p className="text-xs text-gray-400">${item.price.toFixed(2)} each</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-xl border border-gray-200 bg-white p-5 lg:sticky lg:top-6">
          <h2 className="text-base font-semibold text-gray-900">Order Summary</h2>

          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="font-medium text-gray-900">
                {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Estimated tax</span>
              <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
            </div>
          </div>

          {subtotal < 100 && (
            <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700">
              Add ${(100 - subtotal).toFixed(2)} more for free shipping.
            </p>
          )}

          <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
            <span className="font-semibold text-gray-900">Total</span>
            <span className="text-xl font-bold text-gray-900">${total.toFixed(2)}</span>
          </div>

          <button className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
            Proceed to Checkout
          </button>

          <button
            onClick={() => setCartScreen?.(false)}
            className="mt-2 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartScreen