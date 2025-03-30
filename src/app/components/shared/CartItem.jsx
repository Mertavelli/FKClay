

export default function CartItem({ src, product, price }) {

    return (
        <div className="flex justify-between items-start border-b border-[#CECECE] p-5">

            <div className="flex gap-5">
                <img src={src} className="w-20 rounded-full" />
                <div className="flex flex-col justify-between gap-3 items-start">
                    <div>
                        <p className="text-lg">{product}</p>
                        <p>{`$ ${price} USD`}</p>
                    </div>
                    <button className="text-sm hover:underline">REMOVE</button>
                </div>
            </div>


            <input type="number" className="bg-white border rounded-full w-[3rem] p-1 text-center" />
        </div>

    )
}