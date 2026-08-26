import React from "react";

// Shown when a product image URL fails to load (several of the
// fakestoreapi URLs in your data 404).
const FALLBACK_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240">' +
      '<rect width="240" height="240" fill="#f1f5f9"/>' +
      '<text x="120" y="126" font-family="sans-serif" font-size="14" ' +
      'fill="#94a3b8" text-anchor="middle">No image</text></svg>'
  );

const clamp = (lines) => ({
  display: "-webkit-box",
  WebkitLineClamp: lines,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});

const Star = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78-4.21-4.1 5.82-.85L10 1.5z" />
  </svg>
);

const TrashIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 6h18" />
    <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
  </svg>
);

const StarRating = ({ rate = 0 }) => {
  const percent = Math.max(0, Math.min(100, (rate / 5) * 100));
  const stars = [0, 1, 2, 3, 4];

  return (
    <span
      className="relative inline-flex"
      role="img"
      aria-label={`Rated ${rate} out of 5`}
    >
      <span className="flex text-slate-200">
        {stars.map((i) => (
          <Star key={i} className="h-4 w-4 shrink-0" />
        ))}
      </span>
      <span
        className="absolute inset-y-0 left-0 flex overflow-hidden text-amber-400"
        style={{ width: `${percent}%` }}
        aria-hidden="true"
      >
        {stars.map((i) => (
          <Star key={i} className="h-4 w-4 shrink-0" />
        ))}
      </span>
    </span>
  );
};

const ProductCard = ({ product, onAddToCart, onDelete , deleteProduct }) => {
  if (!product) return null;

  const { title, price, description, category, image, rating, id } = product;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
      {/* Image */}
      <div className="relative flex aspect-square items-center justify-center bg-slate-50 p-8">
        <img
          src={image}
          alt={title}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-slate-600 shadow-sm">
          {category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3
          className="text-sm font-semibold leading-snug text-slate-900"
          style={clamp(2)}
          title={title}
        >
          {title}
        </h3>

        <p className="text-xs leading-relaxed text-slate-500" style={clamp(3)}>
          {description}
        </p>

        <div className="flex items-center gap-2">
          <StarRating rate={rating?.rate} />
          <span className="text-xs font-medium text-slate-700">
            {rating?.rate}
          </span>
          <span className="text-xs text-slate-400">({rating?.count})</span>
        </div>

        {/* mt-auto pins this block to the bottom so every card lines up */}
        <div className="mt-auto pt-3">
          <p className="text-lg font-bold text-slate-900">
            ${Number(price).toFixed(2)}
          </p>

          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={() => onAddToCart?.(product)}
              className="flex-1 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 active:scale-95"
            >
              Add to cart
            </button>

            <button
              type="button"
              onClick={() => deleteProduct(id) }
              className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-50 hover:border-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-95"
            >
              <TrashIcon className="h-3.5 w-3.5" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;