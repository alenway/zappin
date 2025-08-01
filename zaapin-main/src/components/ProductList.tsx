// src/components/ProductList.tsx
import React, { useEffect } from "react";
import useProductStore from "../stores/productStore";
import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {
    const fetchProducts = useProductStore((state) => state.fetchProducts);
    const products = useProductStore((state) => state.products);
    const loading = useProductStore((state) => state.loading);
    const error = useProductStore((state) => state.error);

    useEffect(() => {
        fetchProducts(); // fetch on mount
    }, [fetchProducts]);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductList;
