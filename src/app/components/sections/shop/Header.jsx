
export default function Header() {

    return (
        <div className="sm:mb-[5rem]">
            <h1 className="text-center text-[3rem] sm:text-[5rem] mb-[2rem] sm:mb-[5rem]">SHOP</h1>

            <div className="flex justify-center gap-6">
                <button className="hover:underline cursor-pointer">SOFA</button>
                <button className="hover:underline cursor-pointer">LAMP</button>
                <button className="hover:underline cursor-pointer">CHAIR</button>
            </div>
        </div>
    )
}