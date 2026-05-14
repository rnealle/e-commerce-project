"use client";

import { fetchProduct } from "@/lib/actions";
import { Product } from "@/types";
import { use, useEffect, useState } from "react";
import notFound from "@/app/not-found";
import ImageCard from "@/components/image-card";
import PriceText from "@/components/price-text";
import Button from "@/components/button";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProduct(id);
        setProduct(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };

    loadProduct();
  }, [id]);

  //implement very basic cart functionality
  const addToCart = (product: Product) => {
    let currentCartString = localStorage.getItem("cart") || "";
    currentCartString = currentCartString?.concat(
      JSON.stringify(product).concat("/n"),
    );

    localStorage.setItem("cart", currentCartString);
    alert("Successfully added item to cart.");
  };

  if (!product) {
    return notFound();
  }

  return (
    <main className="container mx-auto max-w-[1440px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start p-8">
        {product?.image && <ImageCard src={product?.image} />}
        <div className="space-y-8">
          <p className="text-sm uppercase">{product?.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold">{product?.title}</h1>
          {product?.price && (
            <PriceText
              className="text-2xl font-semibold"
              price={product?.price}
            />
          )}
          <p className="text-justify">{product?.description}</p>
          <Button
            primary
            onClick={() => {
              addToCart(product);
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </main>
  );
}
