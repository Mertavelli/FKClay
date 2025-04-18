import Link from "next/link"

export default function Help() {

    return (
        <div className="flex justify-center items-center h-min py-20 border-t border-[#CECECE]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[3rem] sm:gap-[5rem] px-10 sm:px-20 lg:px-0 max-w-[75rem]">

                <h1 className="text-center lg:text-left text-[3rem] sm:text-[4rem]">Help?</h1>

                <div className="flex flex-col gap-5">
                    <h1 className="text-[2rem]">Contact</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, corrupti nihil inventore suscipit.</p>
                    <div className="flex items-center gap-3 hover:gap-5 transition-all">
                        <Link href={"/pages/contact"} className="hover:underline cursor-pointer">GET IN CONTACT</Link>
                        <img src="/arrow_right.svg" />
                    </div>

                </div>

                <div className="flex flex-col gap-5">
                    <h1 className="text-[2rem]">Questions?</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, corrupti nihil inventore suscipit.</p>
                    <div className="flex items-center gap-3 hover:gap-5 transition-all">
                        <Link href={"/pages/faq"} className="hover:underline cursor-pointer">READ THE FAQ</Link>
                        <img src="/arrow_right.svg" />
                    </div>
                </div>
            </div>
        </div>

    )
}