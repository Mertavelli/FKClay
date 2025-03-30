import ProductCard from "../../shared/ProductCard"

export default function Categories() {
    return (
        <div className="flex justify-center h-[85rem] md:h-[30rem] lg:h-[45rem]">
            <div className="pt-[4rem] w-[20rem] md:w-[45rem] lg:w-[75rem]">
                <h1 className="text-center text-[3rem] sm:text-[4rem] mb-[2rem] sm:mb-[4rem]">Categories</h1>

                <div className="flex sm:flex-row flex-col items-center justify-center gap-13">

                    <a href="">
                        <ProductCard
                            src={"/cat1.png"}
                            title={"OSLO"}
                        />
                    </a>

                    <a href="">
                        <ProductCard
                            src={"/cat2.png"}
                            title={"NEW YORK"}
                        />
                    </a>

                    <a href="">
                        <ProductCard
                            src={"/cat3.png"}
                            title={"LISABON"}
                        />
                    </a>

                </div>
            </div>
        </div>
    )
}