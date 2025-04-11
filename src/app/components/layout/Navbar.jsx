'use client'

import Cart from '../modals/Cart';
import { useState, useEffect } from 'react';
import ProductSmall from '../shared/ProductSmall';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { CiMenuBurger } from "react-icons/ci";
import { useShoppingCart } from "use-shopping-cart";

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHidden, setIsHidden] = useState(false);
    const [isEntered, setIsEntered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const { cartDetails } = useShoppingCart();

    const pathname = usePathname();
    const inverted = pathname === "/";

    useEffect(() => {
        setShowNavbar(true);
        setIsHidden(false);
        setOpenCart(false);
        setIsClicked(false);
    }, [pathname]);

    const handleMouseEnter = () => {
        setIsEntered(true);
    }

    const handleMouseLeave = () => {
        setIsEntered(false);
    }

    const handleCart = () => {
        if (isClicked) {
            return;
        }

        if (!isClicked) {
            setOpenCart(!openCart);
        }
    }


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY == 0) {
                setShowNavbar(true);
            }

            if (currentScrollY <= 450) {
                setIsHidden(false);
            }
            if (currentScrollY > 450) {
                setIsHidden(true);
            }

            const isScrollingDown = currentScrollY > lastScrollY;

            if (currentScrollY > 300 && !isHidden) {
                setShowNavbar(!isScrollingDown);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, isHidden]);

    return (
        <div>

            <div onMouseLeave={handleMouseLeave} className='relative'>
                <div
                    className={`flex justify-between items-center w-full mt-[1rem] z-50 fixed top-0 left-0 transition-all duration-300 ease-in-out ${isHidden
                        ? 'hidden'
                        : showNavbar
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-[-100%]'
                        }`}>

                    <Link href={'/'} className="mx-auto">
                        <img src={inverted ? "/logo_white.png" : "/logo_black.png"} className="w-25 cursor-pointer" />
                    </Link>

                    {/* Navbar Menu */}
                    <div className="flex items-center gap-6 absolute right-[1.5rem] sm:right-[2.5rem] text-xs">
                        <Link href={"/pages/shop"}
                            className={`${inverted ? 'text-white' : ''} hidden sm:block hover:underline cursor-pointer`}>
                            SHOP
                        </Link>

                        <button
                            onClick={handleCart}
                            className={`${inverted ? 'text-white' : ''} invisible sm:visible sm:flex items-center gap-1 hover:underline cursor-pointer`}
                        >
                            <p>CART</p>
                            <p
                                className={`${inverted
                                    ? 'bg-white text-[#343339]'
                                    : 'bg-[#343339] text-white'
                                    } p-1 w-5 h-5 rounded-full flex justify-center items-center text-center`}
                            >
                                {Object.values(cartDetails).reduce((total, item) => total + item.quantity, 0) || 0}
                            </p>
                        </button>

                        {/* Cart für Mobile */}
                        <button
                            onClick={handleCart}
                            className="sm:hidden fixed left-[1.5rem]"
                        >
                            <PiShoppingCartSimpleThin size={30} color={inverted ? 'white' : "black"} />
                        </button>

                        {/* Burger-Icon als Button für kleine Bildschirme */}
                        <button
                            className="sm:hidden"
                            onClick={() => setIsClicked(!isClicked)}
                        >
                            <CiMenuBurger
                                size={30}
                                color={inverted ? 'white' : 'black'}
                            />
                        </button>

                        {/* Normales Menü-Icon für größere Bildschirme */}
                        <button className="sm:block hidden" onClick={() => setIsClicked(!isClicked)}>
                            <img
                                src={inverted ? "/menu-toggle_white.svg" : "/menu-toggle_black.svg"}
                                className="w-10"
                                onMouseEnter={handleMouseEnter}
                            />
                        </button>
                    </div>

                    
                    {isEntered && (
                        <div className={`hidden lg:block h-[17rem] p-10 pl-25 fixed top-15 z-20 bg-white/80 backdrop-blur-lg w-full`}>
                            <div className='flex gap-20'>

                                <div className="grid grid-cols-2 gap-[5rem]">
                                    <div className="grid grid-cols-1 gap-2">
                                        <h1 className="text-[1.5rem] mb-5">SHOP</h1>
                                        <Link href={"/"} className="hover:underline cursor-pointer">Home</Link>
                                        <Link href={"/pages/shop"} className="hover:underline cursor-pointer">Shop</Link>
                                        <Link href={"/pages/contact"} className="hover:underline cursor-pointer">Contact</Link>
                                        <Link href={"/pages/faq"} className="hover:underline cursor-pointer">FAQ</Link>
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                        <h1 className="text-[1.5rem] mb-5">SOCIAL</h1>
                                        <Link href={"https://www.instagram.com/fkclaycreations?igsh=OWU0djFxZ2d1bnhm"} className="hover:underline cursor-pointer">Instagram</Link>
                                        <Link href={"https://www.tiktok.com/@fkcreations.official?_t=ZN-8v7jZgA4sys&_r=1"} className="hover:underline cursor-pointer">Tiktok</Link>
                                        <Link href={"https://www.etsy.com/de/shop/FKClayCreations"} className="hover:underline cursor-pointer">Etsy</Link>
                                        <div className='invisible'>Dummy</div>
                                    </div>
                                </div>

                                <div>
                                    <h1 className='text-[1.5rem] mb-5'>BRAND NEW</h1>

                                    <div className='flex gap-15'>
                                        <ProductSmall
                                            src={"/ps1.png"}
                                            product={"MODERN CHAIR"}
                                            price={"249.00"}
                                        />

                                        <ProductSmall
                                            src={"/ps2.png"}
                                            product={"ELEGANT LAMP"}
                                            price={"129.00"}
                                        />

                                        <ProductSmall
                                            src={"/ps3.png"}
                                            product={"BLACK CHAIR"}
                                            price={"199.00"}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>

            {openCart && !isClicked && (
                <Cart openCart={openCart} setOpenCart={setOpenCart} />
            )}


            {/* Mobile */}
            {isClicked && !openCart && (
                <div className="absolute top-20 p-10 pt-15 z-50 bg-[#EDEDED] w-full h-screen lg:hidden">
                    <div className="grid grid-cols-2 gap-[5rem]">
                        <div className="grid grid-cols-1 gap-5 text-[1.25rem]">
                            <h1 className="text-[1.75rem] mb-5">SHOP</h1>
                            <Link href={"/"} className="hover:underline cursor-pointer">Home</Link>
                            <Link href={"/pages/shop"} className="hover:underline cursor-pointer">Shop</Link>
                            <Link href={"/pages/contact"} className="hover:underline cursor-pointer">Contact</Link>
                            <Link href={"/pages/faq"} className="hover:underline cursor-pointer">FAQ</Link>
                        </div>
                        <div className="grid grid-cols-1 gap-5 text-[1.25rem]">
                            <h1 className="text-[1.75rem] mb-5">SOCIAL</h1>
                            <Link href={"https://www.instagram.com/fkclaycreations?igsh=OWU0djFxZ2d1bnhm"} className="hover:underline cursor-pointer">Instagram</Link>
                            <Link href={"https://www.tiktok.com/@fkcreations.official?_t=ZN-8v7jZgA4sys&_r=1"} className="hover:underline cursor-pointer">Tiktok</Link>
                            <Link href={"https://www.etsy.com/de/shop/FKClayCreations"} className="hover:underline cursor-pointer">Etsy</Link>
                            <div className='invisible'>Dummy</div>
                        </div>
                    </div>
                </div>
            )}

            {isEntered && (
                <div
                    className={`hidden lg:block fixed w-full h-full bg-[#343339]/75 z-10 top-[21.5rem] transition-opacity duration-300 ease-in-out ${isHidden
                        ? 'opacity-0 visibility-hidden'  // Vollständig transparent und unsichtbar
                        : showNavbar
                            ? 'opacity-100 visibility-visible'  // Voll sichtbar
                            : 'opacity-0 visibility-hidden' // Unsichtbar werden
                        }`}
                />
            )}

        </div>
    );
}
