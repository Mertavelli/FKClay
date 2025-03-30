"use client";

import { useParams } from "next/navigation";
import { products } from "../products";
import BrandNew from "@/app/components/sections/home/BrandNew";
import { useState } from "react";
import ProductPopup from "@/app/components/modals/ProductPopup";
import Cart from "@/app/components/modals/Cart";

export default function ProductPage() {
    const params = useParams();
    const product = products.find(p => p.id === params.productId);
    const [openInformation, setOpenInformation] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    if (!product) {
        return <p>Produkt nicht gefunden.</p>;
    }

    return (
        <div className="relative">

            {openCart && (
                <Cart openCart={openCart} setOpenCart={setOpenCart} />
            )}

            {openInformation && (
                <ProductPopup openInformation={openInformation} setOpenInformation={setOpenInformation} />
            )}

            {!openInformation && (
                <div>
                    <div className="grid sm:grid-cols-2">

                        <div className="overflow-hidden w-full h-full">
                            <img src={product.src} className="w-full object-cover object-center" />
                        </div>

                        <div className="flex justify-center sm:mt-[15rem] w-full pt-20 sm:pt-0">
                            <div className="flex flex-col gap-5 px-[2rem]  lg:px-[8rem]">
                                <h1 className="text-[3rem] sm:text-[4rem] leading-none">{product.product}</h1>
                                <p>{`$ ${product.price} USD`}</p>
                                <p>{product.description}</p>

                                <div className="mt-5 flex gap-3">
                                    <input type="number" className="bg-white rounded-full border border-black p-3 w-[5rem] text-center" />
                                    <button onClick={() => setOpenCart(true)} className="bg-[#343339] rounded-full p-3 px-10 text-white cursor-pointer">ADD TO CART</button>
                                </div>

                                <div className="mt-5 flex sm:justify-between gap-10 text-sm border-y border-[#CECECE] py-5">
                                    <button onClick={() => setOpenInformation(true)} className="hover:underline cursor-pointer">DETAILS</button>
                                    <button onClick={() => setOpenInformation(true)} className="hover:underline cursor-pointer">DELIVERY</button>
                                    <button onClick={() => setOpenInformation(true)} className="hover:underline cursor-pointer">RETURNS</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 py-20 lg:py-[10rem]">
                        <h1 className="text-[1.5rem] text-center sm:text-left mb-10 sm:mb-0 sm:pl-[10rem]">DESCRIPTION</h1>
                        <p className="px-[5rem] lg:px-[8rem]">Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel fringilla est ullamcorper eget nulla facilisi etiam. Velit egestas dui id ornare arcu odio ut. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Auctor eu augue ut lectus arcu bibendum at varius. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices.</p>
                    </div>

                    <BrandNew />
                </div>
            )}
        </div>
    );
}
