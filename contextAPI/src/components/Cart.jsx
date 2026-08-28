import React from 'react'

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 px-4 py-24 text-center">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-white/5 text-4xl ring-1 ring-white/10">
          🛒
        </span>
        <h2 className="text-xl font-semibold text-white">Your cart is empty</h2>
        <p className="text-sm text-slate-400">Head back to the shop and add something you like.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Your Cart{' '}
        <span className="text-sm font-normal text-slate-400">
          ({cartItems.length} items)
        </span>
      </h2>

      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl transition duration-300 hover:border-fuchsia-500/40 hover:shadow-lg hover:shadow-fuchsia-500/10">
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-white p-2">
              <img src={item.image} alt={item.title} className="h-full w-full object-contain" />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="line-clamp-1 text-sm font-semibold text-white">{item.title}</h3>
              <p className="text-xs uppercase tracking-wide text-fuchsia-300">{item.category}</p>
            </div>

            <p className="shrink-0 text-lg font-bold text-white">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-xl">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">Total</p>
          <p className="text-2xl font-bold text-white">${total.toFixed(2)}</p>
        </div>
        <button className="rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-105 active:scale-95">
          Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart