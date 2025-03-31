'use client'

import ProductList from "../components/sections/shop/ProductList";
import { useState } from "react";
import { useCreateProduct } from '../api/api.js';

export default function ProductUpload() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [longDescription, setLongDescription] = useState("");
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState("");
    const [sale, setSale] = useState(false);
    const mutation = useCreateProduct();

    const handleSubmit = () => {
        if (!name || !price || !shortDescription || !longDescription || !image || !category) return;

        const newProduct = { name, price, shortDescription, longDescription, image, category, sale };
        mutation.mutate(newProduct);
    };

    return (
        <div className="mt-[6.5rem] sm:mt-[5rem] min-h-screen">


            <h1 className="text-center text-[3rem] sm:text-[5rem] mb-[3rem] sm:mb-[5rem]">ADMIN</h1>

            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-10">

                    <div className="flex flex-col gap-5">
                        <h1 className="text-xl">POST PRODUCT</h1>

                        <div className="flex flex-col">
                            <label>Kategorie</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="border"
                                required
                            >
                                <option value="" disabled>Bitte wählen</option>
                                <option value="schmuck">Schmuck</option>
                                <option value="deko">Deko</option>
                            </select>

                        </div>

                        <div className="flex flex-col">
                            <label>Name</label>
                            <input onChange={(e) => setName(e.target.value)} className="border" />
                        </div>

                        <div className="flex flex-col">
                            <label>Preis</label>
                            <input type="number" onChange={(e) => setPrice(e.target.value)} className="border" />
                        </div>

                        <div className="flex flex-col">
                            <label>Kurzbeschreibung</label>
                            <input onChange={(e) => setShortDescription(e.target.value)} className="border" />
                        </div>

                        <div className="flex flex-col">
                            <label>Lange Beschreibung</label>
                            <textarea onChange={(e) => setLongDescription(e.target.value)} className="border" />
                        </div>

                        <div className="flex flex-col">
                            <label>Bild</label>
                            <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="border" />
                        </div>

                        <div className="flex flex-col">
                            <label>Sale</label>
                            <input onChange={(e) => setSale(!sale)} type="checkbox" />
                        </div>

                        <button onClick={handleSubmit} className="border rounded-full py-2 hover:cursor-pointer">
                            UPLOAD PRODUCT
                        </button>
                    </div>


                    <div className="flex flex-col gap-5">
                        <h1 className="text-xl">GET ALL PRODUCTS</h1>

                        <ProductList />
                    </div>

                </div>
            </div>
        </div>

    )
}