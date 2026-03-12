import { create } from "zustand";
import type { Product } from "../types/product";

interface FavoritesState {
  items: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  items: [],

  addFavorite: (product) =>
    set((state) => {
      if (state.items.some((item) => item.id === product.id)) return state;
      return { items: [...state.items, product] };
    }),

  removeFavorite: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),

  isFavorite: (productId) => get().items.some((item) => item.id === productId),

  clearFavorites: () => set({ items: [] }),
}));
