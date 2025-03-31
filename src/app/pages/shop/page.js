import ProductList from "@/app/components/sections/shop/ProductList";
import Header from "@/app/components/sections/shop/Header";
import Help from "@/app/components/sections/shop/Help";

export default function Shop() {

    return (
        <div className="mt-[6.5rem] sm:mt-[5rem]">
            <Header />
            <ProductList />
            <Help />
        </div>
    )
}