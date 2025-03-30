'use client'

import Lenis from 'lenis'
import Hero from './components/sections/home/Hero';
import BrandNew from './components/sections/home/BrandNew';
import Split from './components/sections/home/Split';
import Image from './components/sections/home/Image';
import Categories from './components/sections/home/Categories';

export default function Home() {

  if (typeof window !== "undefined") {
    const lenis = new Lenis({
      autoRaf: true,
    });
  }

  return (
    <div>
      <Hero />
      <BrandNew />
      <Split />
      <Image />
      <Categories />
    </div>

  );
}
