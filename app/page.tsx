"use client";

import HeroBanner from "@/components/hero-banner";
import ProductCarousel from "@/components/product-carousel";
import { fetchProducts } from "@/lib/actions";
import { Product } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  //temporary filter
  useEffect(() => {
    const loadProducts = async () => {
      try {
        //temporary filter
        const data = (await fetchProducts()).splice(0, 4);
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <main className="flex flex-col place-items-center gap-y-4">
      <HeroBanner />
      <ProductCarousel title="New Arrivals" products={products} />
    </main>
  );
}
