import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-warm-bg">
        <img
          src={product.image}
          alt={product.name}
          width={900}
          height={1100}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-white">
            {product.tag}
          </span>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.06em] text-foreground transition-colors group-hover:text-primary">
            {product.name}
          </h3>
          {product.category && (
            <p className="mt-1 text-xs text-muted-foreground">{product.category}</p>
          )}
        </div>
        <p className="whitespace-nowrap font-display text-sm font-bold text-foreground">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
