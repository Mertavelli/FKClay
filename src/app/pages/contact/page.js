'use client'
import Link from "next/link";

export default function Contact() {

    return (
        <div className="mt-[6.5rem] sm:mt-[5rem] min-h-screen">
            <h1 className="text-center text-[3rem] sm:text-[5rem] mb-[3rem] sm:mb-[5rem]">CONTACT</h1>

            <div className="flex justify-center">
                <div className="grid grid-cols-2 lg:grid-cols-4 sm:w-[70rem] space-y-[2.5rem] lg:space-y-0">

                    <div className="grid grid-cols-1 text-left sm:text-center sm:gap-2">
                        <h1 className="text-[1.5rem] mb-2 sm:mb-5">SOCIAL</h1>
                        <Link href={"https://www.instagram.com/fkclaycreations?igsh=OWU0djFxZ2d1bnhm"} className="hover:underline cursor-pointer">INSTAGRAM</Link>
                        <Link href={"https://www.tiktok.com/@fkcreations.official?_t=ZN-8v7jZgA4sys&_r=1"} className="hover:underline cursor-pointer">TIKTOK</Link>
                        <Link href={"https://www.etsy.com/de/shop/FKClayCreations"} className="hover:underline cursor-pointer">ETSY</Link>
                        <div className="invisible">Dummy</div>
                    </div>

                    <div className="grid grid-cols-1 text-left sm:text-center sm:gap-2">
                        <h1 className="text-[1.5rem] mb-2 sm:mb-5">CONTACT</h1>
                        <p>INFO@EXAMPLE.COM</p>
                        <p>+49 178 4880126</p>
                        <div className="invisible">Dummy</div>
                        <div className="invisible">Dummy</div>
                    </div>

                    <div className="flex flex-col gap-7 col-span-2 w-full sm:px-[10rem] lg:px-0">
                        <div className="flex flex-col">
                            <label>NAME</label>
                            <input type="text" placeholder="Name" className="bg-white border py-2 px-4" />
                        </div>

                        <div className="flex flex-col">
                            <label>EMAIL</label>
                            <input type="email" placeholder="Email Address" className="bg-white border py-2 px-4" />
                        </div>

                        <div className="flex flex-col">
                            <label>MESSAGE</label>
                            <textarea type="text" placeholder="Your Message" className="bg-white border py-2 px-4" />
                        </div>

                        <button className="text-white bg-[#343339] rounded-full py-4 mt-5 w-[15rem] cursor-pointer mb-10">SUBMIT MESSAGE</button>

                    </div>
                </div>
            </div>

        </div >
    )
}