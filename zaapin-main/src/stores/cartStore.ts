// src/store/cartStore.ts
import { create } from "zustand";
import { Product, CartItem } from "../types";

interface CartState {
    items: CartItem[];
    total: number;
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
    items: [],
    total: 0,

    addToCart: (product) =>
        set((state) => {
            const existing = state.items.find((item) => item.id === product.id);
            let newItems: CartItem[];

            if (existing) {
                newItems = state.items.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                newItems = [...state.items, { ...product, quantity: 1 }];
            }

            const newTotal = newItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );

            return { items: newItems, total: newTotal };
        }),

    removeFromCart: (id) =>
        set((state) => {
            const newItems = state.items.filter((item) => item.id !== id);
            const newTotal = newItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );
            return { items: newItems, total: newTotal };
        }),

    updateQuantity: (id, quantity) =>
        set((state) => {
            const newItems = state.items
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: Math.max(1, quantity) }
                        : item
                )
                .filter((item) => item.quantity > 0);
            const newTotal = newItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );
            return { items: newItems, total: newTotal };
        }),

    clearCart: () => set({ items: [], total: 0 }),
}));

export default useCartStore;
