import axios from "axios";
import { Product } from "@/types";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};

export const fetchProduct = async (id: string): Promise<Product> => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products/" + id);
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Failed to fetch product");
  }
};
