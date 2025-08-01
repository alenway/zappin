// src/store/productStore.ts
import { create } from "zustand";
import axios from "axios";
import { Product } from "../types";

interface ProductStore {
    products: Product[];
    loading: boolean;
    error: string | null;
    fetchProducts: () => Promise<void>;
}

const useProductStore = create<ProductStore>((set) => ({
    products: [],
    loading: false,
    error: null,
    fetchProducts: async () => {
        try {
            set({ loading: true, error: null });
            const res = await axios.get("http://localhost:3000/api/products");
            const transformed = res.data.map((item: any) => ({
                ...item,
                id: item._id,
            }));
            set({ products: transformed, loading: false });
        } catch (err) {
            set({ error: "Failed to fetch products", loading: false });
        }
    },
}));

export default useProductStore;
