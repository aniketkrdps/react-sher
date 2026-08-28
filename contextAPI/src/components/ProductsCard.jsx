import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const ProductsCard = ({ product }) => {
  const { title, price, description, category, image, rating } = product

  let{setCartItems}=useContext(MyStore)

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-lg shadow-indigo-900/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-fuchsia-500/40 hover:shadow-xl hover:shadow-fuchsia-500/20">
      <div className="relative h-56 shrink-0 overflow-hidden bg-white p-6">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-fuchsia-300 backdrop-blur">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-white">
            {title}
          </h3>
          <span className="shrink-0 rounded-lg bg-white/5 px-2 py-1 text-xs font-medium text-amber-300 ring-1 ring-white/10">
            ⭐ {rating.rate}
          </span>
        </div>

        <p className="line-clamp-2 text-xs leading-relaxed text-slate-400">
          {description}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-2">
          <div>
            <p className="text-xl font-bold text-white">${price.toFixed(2)}</p>
            <p className="text-[11px] text-slate-500">{rating.count} reviews</p>
          </div>
          <button
          onClick={() => setCartItems((prev) => [...prev,product])}
           className="rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-105 active:scale-95">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductsCard