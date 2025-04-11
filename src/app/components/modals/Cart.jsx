import CartItem from "../shared/CartItem";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import CheckoutButton from "../shared/CheckoutButton";

export default function Cart({ openCart, setOpenCart }) {
    const { cartDetails, totalPrice } = useShoppingCart();

    return (
        <div className="absolute top-0 w-full h-screen z-50">
            
            <div className="fixed top-0 left-0 w-full h-full bg-[#343339]/75"></div>

            
            <div className="fixed right-0 bg-[#EDEDED] pt-[1rem] w-[25rem] h-screen px-[1rem] shadow-2xl">

                <div className="flex justify-between px-3 mb-5">
                    <h1 className="text-[2rem]">Cart</h1>
                    <button onClick={() => setOpenCart(false)} className="hover:underline">CLOSE</button>
                </div>

                <div className="max-h-[40rem] overflow-y-auto pb-7">
                    {Object.values(cartDetails).map((item) => (
                        <div key={item.id} className="flex flex-col gap-1">
                            <Link href={`/pages/shop/${item.id}`}>
                                <CartItem item={item} />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-full bg-[#EDEDED]">
                    <div className="border-t border-[#CECECE] px-5">
                        <div className="flex justify-between mt-5">
                            <p>SUBTOTAL</p>
                            <p>€ {totalPrice?.toFixed(2)}</p>
                        </div>

                        <CheckoutButton>CONTINUE TO CHECKOUT</CheckoutButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
