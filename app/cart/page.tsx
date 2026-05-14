"use client";

import { fetchProduct } from "@/lib/actions";
import { Product } from "@/types";
import { use, useEffect, useState } from "react";
import notFound from "@/app/not-found";
import ImageCard from "@/components/image-card";
import PriceText from "@/components/price-text";
import Button from "@/components/button";
import ProductCard from "@/components/product-card";

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>();

  useEffect(() => {
    const loadCartProducts = () => {
      const cartString = localStorage.getItem("cart");
      const cartItems = cartString?.split("/n");
      const cartObjects = cartItems
        ?.filter((item) => item.trim() !== "")
        .map((c) => {
          return JSON.parse(c);
        });

      setCart(cartObjects);
    };

    loadCartProducts();
  }, []);

  const clearCart = () => {
    localStorage.removeItem("cart");

    alert("Cart cleared");
  };

  return (
    <main className="container mx-auto max-w-[1440px] py-10 px-8 flex flex-col gap-8">
      <div className="flex place-content-between w-full">
        <h2 className="text-4xl font-bold">
          Your cart contains {cart?.length ?? 0} item/s
        </h2>

        <Button
          secondary
          outline
          variant="dark"
          onClick={() => {
            clearCart();
          }}
          className="grow-0 !w-[max-content]"
        >
          Clear cart
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {cart?.map((c, index) => (
          <div key={index} className="aspect-square" style={{ width: "320px" }}>
            <ProductCard product={c} />
          </div>
        ))}
      </div>
    </main>
  );
}
