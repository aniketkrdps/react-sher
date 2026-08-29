import React, { useContext } from 'react'
import { MyStore } from '../context/ContextAPI'

const ProductsCard = ({ product, onAddToCart , inCart }) => {
  const { title, price, description, category, image, rating,id,quantity } = product

  let {setCartItems,increment,decrement} = useContext(MyStore)

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="flex h-52 items-center justify-center bg-gray-50 p-6">
        <img
          src={image}
          alt={title}
          className="h-full max-w-full object-contain mix-blend-multiply"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span className="w-fit rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-gray-600">
          {category}
        </span>

        <h3 className="mt-3 line-clamp-2 text-sm font-semibold text-gray-900" title={title}>
          {title}
        </h3>

        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex text-sm">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= Math.round(rating.rate) ? 'text-amber-400' : 'text-gray-300'}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {rating.rate} · {rating.count} reviews
          </span>
        </div>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-500">
          {description}
        </p>

        <div className="mt-auto pt-4">
          <div className="mb-3 flex items-baseline justify-between">
            <span className="text-xl font-bold text-gray-900">
              ${price.toFixed(2)}
            </span>
            <span className="text-xs font-medium text-green-600">In stock</span>
          </div>
            <div>
                {inCart ? <div className="flex w-full select-none items-center justify-between rounded-lg bg-blue-600 text-white">
  <button
    onClick={() => decrement(id)} className="rounded-l-lg px-5 py-2 text-xl font-medium transition hover:bg-blue-700 active:bg-blue-800">
    −
  </button>
  <span className="text-sm font-semibold">{inCart.quantity}</span>
  <button 
    onClick={() => increment(id)}
  className="rounded-r-lg px-5 py-2 text-xl font-medium transition hover:bg-blue-700 active:bg-blue-800">
    +
  </button>
</div> : <button
            onClick={() => setCartItems((prev) => [...prev,{...product,quantity:1}])}
            className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 active:bg-blue-800"
          >
            Add to Cart
          </button> }
            </div>
         
        </div>
      </div>
    </div>
  )
}

export default ProductsCard