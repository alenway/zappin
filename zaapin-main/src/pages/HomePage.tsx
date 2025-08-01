import React, { useEffect } from "react";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import useProductStore from "../stores/productStore";
import ProductList from "../components/ProductList";

const HomePage = () => {
    const { products, fetchProducts, loading, error } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, []);

    // Handle both string and populated object for category
    const filterByCategory = (category: string) =>
        products.filter((product) => {
            const cat =
                typeof product.category === "string"
                    ? product.category
                    : product.category?.name;

            return cat?.toLowerCase() === category.toLowerCase();
        });

    return (
        <div className="min-h-screen bg-white pb-20">
            <Hero />
            <ProductList />

            {loading && <p className="text-center py-8">Loading...</p>}
            {error && <p className="text-center py-8 text-red-500">{error}</p>}

            {!loading && !error && (
                <>
                    <CategorySection
                        id="appetizers"
                        title="Appetizers"
                        description="Start your meal with our delicious appetizers and starters."
                        products={filterByCategory("appetizers")}
                        bgColor="bg-white"
                    />

                    <CategorySection
                        id="mains"
                        title="Main Course"
                        description="Satisfy your hunger with our hearty and flavorful main dishes."
                        products={filterByCategory("mains")}
                        bgColor="bg-gray-50"
                    />

                    <CategorySection
                        id="desserts"
                        title="Desserts"
                        description="End your meal on a sweet note with our decadent desserts."
                        products={filterByCategory("desserts")}
                        bgColor="bg-white"
                    />

                    <CategorySection
                        id="beverages"
                        title="Beverages"
                        description="Refresh yourself with our selection of hot and cold beverages."
                        products={filterByCategory("beverages")}
                        bgColor="bg-gray-50"
                    />
                </>
            )}
        </div>
    );
};

export default HomePage;
