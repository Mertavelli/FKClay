import Link from "next/link"

export default function Split() {
    return (
        <div className="flex justify-center h-min py-30 border-t border-[#CECECE]">
            <div className="text-center md:text-left md:grid md:grid-cols-2 md:gap-10 w-[20rem] md:w-[40rem] lg:w-[65rem]">

                <div className="text-[4rem] leading-none mb-10 md:mb-0">
                    <h1>Lorem</h1>
                    <h1>ipsum</h1>
                </div>

                <div className="">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta, at tempora autem vitae rerum eos doloribus cupiditate ex expedita qui repellendus, itaque dignissimos voluptatibus? Sunt expedita commodi officia sequi.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta, at tempora autem vitae rerum eos doloribus cupiditate ex expedita qui repellendus, itaque dignissimos voluptatibus? Sunt expedita commodi officia sequi.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta, at tempora autem vitae rerum eos doloribus cupiditate ex expedita qui repellendus, itaque dignissimos voluptatibus? Sunt expedita commodi officia sequi.</p>
                    <br />
                    <br />
                    <br />

                    <Link href={"/pages/shop"} className="border rounded-full py-4 px-7">SHOP NOW</Link>

                </div>
            </div>
        </div>

    )
}