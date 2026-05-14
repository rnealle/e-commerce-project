import { Product } from "@/types";
import ProductCard from "../product-card";
import { title } from "process";

export interface ProductCarouselProps {
  products: Product[];
  title: string;
}

const ProductCarousel = ({ title, products }: ProductCarouselProps) => {
  return (
    <div className="max-w-[1440px] mx-auto px-8 flex flex-col gap-8 my-16">
      <h2 className="text-4xl font-bold">{title}</h2>
      <div className="grid gap-x-6 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
