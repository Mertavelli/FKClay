import ProductCard from "../../shared/ProductCard"
import Link from "next/link";
import { products } from "@/app/pages/shop/products";

export default function ProductList() {

    return (
        <div className="flex justify-center py-10 sm:py-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-13 w-[20rem] md:w-[45rem] lg:w-[75rem]">

                {products.map((product) => (
                    <Link key={product.id} href={`/pages/shop/${product.id}`}>
                        <ProductCard
                            src={product.src}
                            product={product.product}
                            price={product.price}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}