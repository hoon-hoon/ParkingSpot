import { create } from "zustand";

interface FavoriteState {
  isFavoriteMode: boolean;
  toggleFavoriteMode: () => void;
}

export const useFavoriteStore = create<FavoriteState>((set) => ({
  isFavoriteMode: false,
  toggleFavoriteMode: () =>
    set((state) => ({
      isFavoriteMode: !state.isFavoriteMode,
    })),
}));
