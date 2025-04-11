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
                            src={"https://images.unsplash.com/photo-1679590988891-2357406aca80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"}
                            title={"SCHMUCK"}
                        />
                    </Link>

                    <Link href="/pages/shop">
                        <ProductCard
                            src={"https://plus.unsplash.com/premium_photo-1705717314175-948a60cf6966?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFuZG1hZGUlMjBkZWtvfGVufDB8fDB8fHww"}
                            title={"DEKO"}
                        />
                    </Link>

                    <Link href="/pages/shop">
                        <ProductCard
                            src={"https://images.unsplash.com/photo-1641443659808-5e3477f7e195?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZG1hZGUlMjBzYWxlfGVufDB8fDB8fHww"}
                            title={"SALE"}
                        />
                    </Link>

                </div>
            </div>
        </div>
    )
}
