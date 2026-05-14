import { Product } from "@/types";
import ProductCard from "../product-card";

export interface ProductCardGridProps {
  products: Product[];
}

const ProductCardGrid = ({ products }: ProductCardGridProps) => {
  return (
    <div className="grid gap-x-6 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCardGrid;
