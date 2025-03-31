import ProductCard from "../../shared/ProductCard"

export default function BrandNew() {
    return (
        <div className="flex justify-center h-min py-20 items-center border-t border-[#CECECE]">
            <div className="w-[20rem] md:w-[45rem] lg:w-[75rem]">
                <h1 className="text-center text-[3rem] sm:text-[4rem] mb-[2rem] sm:mb-[4rem]">Brand New</h1>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-13">

                    <ProductCard
                        newProduct={true}
                        src={"/image1.png"}
                        product={"MODERN CHAIR"}
                        price={"249.00"}
                    />

                    <ProductCard
                        newProduct={true}
                        src={"/image2.png"}
                        product={"ELEGANT LAMP"}
                        price={"129.00"}
                    />

                    <ProductCard
                        newProduct={true}
                        src={"/image3.png"}
                        product={"BLACK CHAIR"}
                        price={"199.00"}
                    />

                </div>
            </div>
        </div>
    )
}