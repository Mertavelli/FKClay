import ProductCard from "../../shared/ProductCard"
import { useProducts } from "@/app/api/api";
import Link from "next/link";

export default function BrandNew() {
    const { data: products, isLoading, error } = useProducts();
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const latestProducts = products?.slice(-3).reverse();

    if (isLoading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="flex justify-center h-min py-20 items-center border-t border-[#CECECE]">
            <div className="w-[20rem] md:w-[45rem] lg:w-[75rem]">
                <h1 className="text-center text-[3rem] sm:text-[4rem] mb-[2rem] sm:mb-[4rem]">Brand New</h1>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-13">

                    {latestProducts.map((product) => (
                        <Link key={product._id} href={`/pages/shop/${product._id}`}>
                            <ProductCard
                                src={`${API_URL}${product.imagePath}`}
                                product={product.name}
                                price={product.price}
                                newProduct={true}
                            />
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    )
}