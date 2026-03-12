import {
  products,
  newStockAvailable,
  StockAvailableProducts,
  StockProducts,
  StockAvailable,
} from "../../products";
import type { Product } from "../types/product";

// Currently uses static data. Replace these functions with actual API calls
// when a backend is available (e.g. using axios).

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getNewStock(): Product[] {
  return newStockAvailable;
}

export function getStockAvailableProducts(): Product[] {
  return StockAvailableProducts;
}

export function getStockProducts(): Product[] {
  return StockProducts;
}

export function getStockAvailable(): Product[] {
  return StockAvailable;
}
