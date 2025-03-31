"use client";

import BrandNew from "@/app/components/sections/home/BrandNew";
import { useState } from "react";
import ProductPopup from "@/app/components/modals/ProductPopup";
import Cart from "@/app/components/modals/Cart";
import { useParams } from "next/navigation";
import { useProductById } from '../../../api/api.js';

export default function ProductPage() {
    const [openInformation, setOpenInformation] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const { id } = useParams();
    const { data: product, isLoading, error } = useProductById(id);
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    if (isLoading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {product && (
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

                                <div className="overflow-hidden w-full h-full relative">
                                    <h1 className="absolute sm:hidden px-[2rem] text-[3rem] leading-none bottom-5 bg-white/45 w-min py-3 rounded-r-full">{product.name}</h1>
                                    <img src={`${API_URL}${product.imagePath}`} className="w-full object-cover object-center" />
                                </div>

                                <div className="flex justify-center sm:mt-[15rem] w-full pt-10 sm:pt-0">
                                    <div className="flex flex-col gap-5 px-[2rem]  lg:px-[8rem]">
                                        <h1 className="hidden md:block text-[3rem] sm:text-[4rem] leading-none">{product.name}</h1>
                                        <p>{`$ ${product.price} USD`}</p>
                                        <p>{product.shortDescription}</p>

                                        <div className="mt-5 flex gap-3">
                                            <input type="number" className="bg-white rounded-full border border-black p-3 w-[5rem] text-center" />
                                            <button onClick={() => setOpenCart(true)} className="bg-[#343339] rounded-full p-3 px-10 text-white cursor-pointer">ADD TO CART</button>
                                        </div>

                                        <div className="mt-5 flex justify-between md:justify-normal gap-10 text-sm border-y border-[#CECECE] py-5">
                                            <button onClick={() => setOpenInformation(true)} className="hover:underline cursor-pointer">DETAILS</button>
                                            <button onClick={() => setOpenInformation(true)} className="hover:underline cursor-pointer">DELIVERY</button>
                                            <button onClick={() => setOpenInformation(true)} className="hover:underline cursor-pointer">RETURNS</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 py-10 sm:py-20 lg:py-[10rem]">
                                <h1 className="text-[1.5rem] text-center sm:text-left mb-10 sm:mb-0 sm:pl-[10rem]">DESCRIPTION</h1>
                                <p className="px-[2rem] sm:px-[5rem] lg:px-[8rem]">{product.longDescription}</p>
                            </div>

                            <BrandNew />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
