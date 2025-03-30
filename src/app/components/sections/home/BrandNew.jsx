import ProductCard from "../../shared/ProductCard"

export default function BrandNew() {
    return (
        <div className="flex justify-center h-min py-20 items-center border-t border-[#CECECE]">
            <div className="w-[20rem] md:w-[45rem] lg:w-[75rem]">
                <h1 className="text-center text-[3rem] sm:text-[4rem] mb-[2rem] sm:mb-[4rem]">Brand New</h1>

                <div className="flex sm:flex-row flex-col items-center justify-center gap-13">

                    <div className="relative">
                        <p className="bg-[#343339] text-white text-center rounded-full text-sm w-18 h-18 flex items-center justify-center absolute right-5 top-5 z-10">NEW</p>

                        <ProductCard
                            src={"/image1.png"}
                            product={"MODERN CHAIR"}
                            price={"249.00"}
                        />
                    </div>


                    <div className="relative">
                        <p className="bg-[#343339] text-white text-center rounded-full text-sm w-18 h-18 flex items-center justify-center absolute right-5 top-5 z-10">NEW</p>

                        <ProductCard
                            src={"/image2.png"}
                            product={"ELEGANT LAMP"}
                            price={"129.00"}
                        />
                    </div>

                    <div className="relative">
                        <p className="bg-[#343339] text-white text-center rounded-full text-sm w-18 h-18 flex items-center justify-center absolute right-5 top-5 z-10">NEW</p>

                        <ProductCard
                            src={"/image3.png"}
                            product={"BLACK CHAIR"}
                            price={"199.00"}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}