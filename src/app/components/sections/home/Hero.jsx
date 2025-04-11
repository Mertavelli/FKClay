import Link from "next/link";

export default function Hero() {
    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1679590988898-50c20140aec0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFuZG1hZGUlMjBqZXdlbGxyeXxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-cover h-[30rem] sm:h-[65rem] pt-[10rem] sm:pt-[20rem]">

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