import Link from "next/link";

export default function Hero() {
    return (
        <div className="bg-[url('/bg1.png')] bg-center bg-cover h-[30rem] sm:h-[65rem] pt-[10rem] sm:pt-[20rem]">

            <div className="text-white text-center text-[3rem] sm:text-[7rem] lg:text-[10rem] leading-none ">
                <h1>DESIGN</h1>
                <h1>FURNITURE</h1>
            </div>

            <Link href={"/pages/shop"} className="flex justify-center mt-10">
                <p className="text-white text-center border rounded-full p-4 w-[10rem]">SHOP NOW</p>
            </Link>
        </div>
    )
}