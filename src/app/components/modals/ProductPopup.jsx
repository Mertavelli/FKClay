'use client'

import { useParams } from "next/navigation";
import { products } from "@/app/pages/shop/products"

export default function ProductPopup({ openInformation, setOpenInformation }) {

    const params = useParams(); // Params korrekt abrufen
    const product = products.find(p => p.id === params.productId);

    if (!product) {
        return <p>Produkt nicht gefunden.</p>;
    }

    return (
        <div className="grid grid-cols-2 h-screen absolute z-50">

            <div className="relative w-full h-screen overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[#343339]/75"></div>
                <img src={product.src} className="w-full object-cover object-center" />
            </div>


            <div className="px-[8rem] pt-[3rem] flex flex-col gap-10 bg-[#EDEDED]">
                <button onClick={() => setOpenInformation(false)} className="w-full hover:underline">CLOSE</button>

                <div className="border-b border-[#CECECE] flex flex-col gap-5 pb-10">
                    <h1 className="text-[2rem]">Details</h1>
                    <p>Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel fringilla est ullamcorper eget nulla facilisi etiam. Velit egestas dui id ornare arcu odio ut. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Auctor eu augue ut lectus arcu bibendum at varius. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices.</p>
                </div>

                <div className="border-b border-[#CECECE] flex flex-col gap-5 pb-10">
                    <h1 className="text-[2rem]">Delivery</h1>
                    <p>Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel fringilla est ullamcorper eget nulla facilisi etiam.</p>
                </div>

                <div className="flex flex-col gap-5">
                    <h1 className="text-[2rem]">Returns</h1>
                    <p>Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget. </p>
                </div>

            </div>
        </div>
    )
}