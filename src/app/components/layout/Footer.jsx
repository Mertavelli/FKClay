import Link from "next/link"

export default function Footer() {
    return (
        <div className="pt-[2rem] sm:pt-[5rem] border-t border-[#CECECE]">
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-2 gap-[5rem] md:gap-[15rem]">
                    <div className="grid grid-cols-1 text-center sm:gap-2">
                        <h1 className="text-[1.5rem] mb-2 sm:mb-5">SHOP</h1>
                        <Link href={"/"} className="hover:underline cursor-pointer">Home</Link>
                        <Link href={"/pages/shop"} className="hover:underline cursor-pointer">Products</Link>
                        <Link href={"/pages/contact"} className="hover:underline cursor-pointer">Contact</Link>
                        <Link href={"/pages/faq"} className="hover:underline cursor-pointer">FAQ</Link>
                    </div>
                    <div className="grid grid-cols-1 text-center sm:gap-2">
                        <h1 className="text-[1.5rem] mb-2 sm:mb-5">SOCIAL</h1>
                        <Link href={"https://www.instagram.com/fkclaycreations?igsh=OWU0djFxZ2d1bnhm"} className="hover:underline cursor-pointer">Instagram</Link>
                        <Link href={"https://www.tiktok.com/@fkcreations.official?_t=ZN-8v7jZgA4sys&_r=1"} className="hover:underline cursor-pointer">Tiktok</Link>
                        <Link href={"https://www.etsy.com/de/shop/FKClayCreations"} className="hover:underline cursor-pointer">Etsy</Link>
                        <div className="invisible">Dummy</div>
                    </div>
                </div>
            </div>
            <p className="text-center text-xs mt-[2rem] sm:mt-[5rem] mb-5">© 2025 Made by Louis Karakas.</p>
        </div>


    )
}