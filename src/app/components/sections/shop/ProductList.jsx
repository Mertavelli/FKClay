'use client'

import ProductCard from "../../shared/ProductCard"
import Link from "next/link";
import { useProducts } from '../../../api/api.js';

export default function ProductList({ filter }) {
    const { data: products, isLoading, error } = useProducts();
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    if (isLoading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="flex justify-center py-10 sm:py-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-13 w-[20rem] md:w-[45rem] lg:w-[75rem]">

                {products
                    .filter((product) => {
                        if (filter === "") return true; // Alle Produkte anzeigen
                        if (filter === "schmuck") return product.category === "schmuck";
                        if (filter === "deko") return product.category === "deko";
                        if (filter === "sale") return product.sale === true;
                        return true;
                    })
                    .map((product) => (
                        <Link key={product._id} href={`/pages/shop/${product._id}`}>
                            <ProductCard
                                src={`${API_URL}${product.imagePath}`}
                                product={product.name}
                                price={product.price}
                            />
                        </Link>
                    ))}

            </div>
        </div>
    );
}
