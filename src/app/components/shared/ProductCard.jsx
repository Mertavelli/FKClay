
export default function ProductCard({ newProduct, src, title, product, price }) {
    return (
        <div className="relative flex flex-col items-center">

            {newProduct && (
                <p className="bg-[#343339] text-white text-center rounded-full text-sm w-18 h-18 flex items-center justify-center absolute right-7 top-2 z-10">NEW</p>
            )}

            {title && (
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[3rem] text-center leading-none">{title}</h1>
            )}

            <img src={src} className="rounded-full w-55 sm:w-full" />

            <div className="mt-5">
                <p className="text-center text-sm sm:text-lg">{product}</p>
                {price && (
                    <p className="text-center text-sm sm:text-md">{`$ ${price} USD`}</p>
                )}
            </div>
        </div>
    )
}