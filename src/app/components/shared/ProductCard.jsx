
export default function ProductCard({ src, title, product, price }) {
    return (
        <div className="relative">
            {title && (
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[3rem] text-center leading-none">{title}</h1>
            )}
            <img src={src} className="rounded-full" />

            <div className="mt-5">
                <p className="text-center text-sm sm:text-lg">{product}</p>
                {price && (
                    <p className="text-center text-sm sm:text-md">{`$ ${price} USD`}</p>
                )}
            </div>
        </div>
    )
}