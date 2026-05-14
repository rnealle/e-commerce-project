import { Product } from "@/types";
import Link from "next/link";
import ImageCard from "../image-card";
import PriceText from "../price-text";

export interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/p/${product.id}`} className="flex flex-col gap-y-8">
      <div className="h-120 flex flex-col gap-y-6">
        <ImageCard src={product.image} />
        <div className="flex flex-col items-stretch h-1/3">
          <p className="text-sm font-semibold underline uppercase">
            {product.category}
          </p>
          <p>{product.title}</p>
          <PriceText className="mt-auto" price={product.price} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
