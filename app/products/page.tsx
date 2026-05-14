"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types";
import { fetchProducts } from "@/lib/actions";
import CategoryPane from "@/components/category-pane";
import ProductCardGrid from "@/components/product-card-grid";

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <main className="p-8 m-auto max-w-[1440px]">
      <CategoryPane />
      <ProductCardGrid products={products} />
    </main>
  );
}
