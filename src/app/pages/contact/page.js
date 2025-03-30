'use client'
import Link from "next/link";

export default function Contact() {

    return (
        <div className="mt-[5rem] min-h-screen">
            <h1 className="text-center text-[4rem] sm:text-[5rem] mb-[3rem] sm:mb-[5rem]">CONTACT</h1>

            <div className="flex justify-center">
                <div className="grid grid-cols-2 lg:grid-cols-4 sm:w-[70rem] space-y-[5rem] lg:space-y-0">

                    <div className="lg:block flex justify-center">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-[1.75rem] sm:text-[2rem] mb-3">SOCIAL</h1>
                            <Link href={"/"}>INSTAGRAM</Link>
                            <Link href={"/"}>TIKTOK</Link>
                            <Link href={"/"}>ETSY</Link>
                        </div>
                    </div>

                    <div className="lg:block flex justify-center">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-[1.75rem] sm:text-[2rem] mb-3">CONTACT</h1>
                            <p>INFO@EXAMPLE.COM</p>
                            <p>+49 178 4880126</p>
                        </div>
                    </div>


                    <div className="flex flex-col gap-7 col-span-2 px-5 w-full sm:px-[10rem] lg:px-0">
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

                        <button className="text-white bg-[#343339] rounded-full py-4 mt-5 w-[15rem] cursor-pointer">SUBMIT MESSAGE</button>

                    </div>
                </div>
            </div>

        </div >
    )
}