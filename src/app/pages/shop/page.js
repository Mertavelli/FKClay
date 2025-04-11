'use client'

import ProductList from "@/app/components/sections/shop/ProductList";
import Help from "@/app/components/sections/shop/Help";
import { useState } from "react";

export default function Shop() {
    const [filter, setFilter] = useState("");

    return (
            <div className="mt-[6.5rem] sm:mt-[5rem]">
                <div className="sm:mb-[5rem]">
                    <h1 className="text-center text-[3rem] sm:text-[5rem] mb-[3rem] sm:mb-[5rem]">SHOP</h1>

                    <div className="flex justify-center gap-6">
                        <button onClick={() => setFilter("")} className="hover:underline cursor-pointer">ALLES</button>
                        <button onClick={() => setFilter("schmuck")} className="hover:underline cursor-pointer">SCHMUCK</button>
                        <button onClick={() => setFilter("deko")} className="hover:underline cursor-pointer">DEKO</button>
                        <button onClick={() => setFilter("sale")} className="hover:underline cursor-pointer">SALE</button>
                    </div>
                </div>
                <ProductList filter={filter} />
                <Help />
            </div>

    )
}