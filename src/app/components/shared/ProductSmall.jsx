export default function ProductSmall({ src, product, price }) {
    return (
        <div className="flex items-center gap-5">
            <img src={src} className="w-30"/>
            <div>
                <p>{product}</p>
                <p>$ {price} USD</p>
            </div>
        </div>
    )
}