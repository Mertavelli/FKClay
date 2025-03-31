import ProductCard from "../../shared/ProductCard"
import Link from "next/link"

export default function Categories() {
    return (
        <div className="flex justify-center py-10 sm:py-20">
            <div className="w-[20rem] md:w-[45rem] lg:w-[75rem]">
                <h1 className="text-center text-[3rem] sm:text-[4rem] mb-[2rem] sm:mb-[4rem]">Categories</h1>

                <div className="flex sm:flex-row flex-col items-center justify-center gap-13">

                    <Link href="/pages/shop">
                        <ProductCard
                            src={"/cat1.png"}
                            title={"SCHMUCK"}
                        />
                    </Link>

                    <Link href="/pages/shop">
                        <ProductCard
                            src={"/cat2.png"}
                            title={"DEKO"}
                        />
                    </Link>

                    <Link href="/pages/shop">
                        <ProductCard
                            src={"/cat3.png"}
                            title={"SALE"}
                        />
                    </Link>

                </div>
            </div>
        </div>
    )
}