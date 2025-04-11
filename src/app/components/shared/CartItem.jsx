import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

export default function CartItem({ item }) {
    const [quantity, setQuantity] = useState(item.quantity)
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const { addItem, cartDetails, removeItem, totalPrice, clearCart, setItemQuantity } = useShoppingCart()

    const handleQuantityChange = (id, p_quantity) => {
        setQuantity(p_quantity)
        setItemQuantity(id, p_quantity)
    }

    return (
        <div className="flex justify-between items-start border-b border-[#CECECE] p-5">
            <div className="flex gap-5">
                <img src={`${API_URL}${item.imagePath}`} className="w-20 rounded-full" />
                <div className="flex flex-col justify-between gap-3 items-start">
                    <div>
                        <p className="text-lg">{item.name}</p>
                        <p>{`$ ${item.price} USD`}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-sm hover:underline">REMOVE</button>
                </div>
            </div>

            <input onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))} value={quantity} type="number" className="bg-white border rounded-full w-[3rem] p-1 text-center" />
        </div>
    );
}
