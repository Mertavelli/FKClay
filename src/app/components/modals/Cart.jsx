'use client'
import CartItem from "../shared/CartItem"
import { products } from "@/app/pages/shop/products";
import Link from "next/link";

export default function Cart({ openCart, setOpenCart }) {

    return (
        <div className="absolute w-full h-screen z-50">
            {/* Hintergrund, Z-Index niedrig halten */}
            <div className="fixed top-0 left-0 w-full h-full bg-[#343339]/75"></div>

            {/* Cart-Panel, höhere Z-Index */}
            <div className="fixed right-0 bg-[#EDEDED] pt-[1rem] w-[25rem] h-screen px-[1rem] shadow-2xl">

                <div className="flex justify-between px-3 mb-5">
                    <h1 className="text-[2rem]">Cart</h1>
                    <button onClick={() => setOpenCart(false)} className="hover:underline">CLOSE</button>
                </div>

                <div className="max-h-[40rem] overflow-y-auto">
                    {products.map((product) => (
                        <div key={product.id} className="flex flex-col gap-1">
                            <Link href={`/pages/shop/${product.id}`}>
                                <CartItem
                                    src={product.src}
                                    product={product.product}
                                    price={product.price}
                                />
                            </Link>
                        </div>
                    ))}
                </div>


                <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-full bg-[#EDEDED]">
                    <div className="border-t border-[#CECECE] px-5">
                        <div className="flex justify-between mt-5">
                            <p>SUBTOTAL</p>
                            <p>$ 68.00 USD</p>
                        </div>

                        <button className="text-white bg-[#343339] rounded-full py-4 mt-5 w-full cursor-pointer">CONTINUE TO CHECKOUT</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
