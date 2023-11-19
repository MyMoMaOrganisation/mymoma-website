'use client'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'
import Hero from './components/Hero'
import WhoWe from './components/WhoWe'
import OurServices from './components/OurServices'
import Distinction from './components/Distinction'
import OurImpact from './components/OurImpact'
import OurClients from './components/OurClients'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';

import { Poppins } from 'next/font/google';
const poppins = Poppins({weight:["100",'200','300','400','500','600','700','800','900'],subsets:['latin']})

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  return (
    <div className={poppins.className + ' bg-bgpurple scroll-smooth'}>
      <Hero />
      <WhoWe />
      <OurServices />
      <Distinction />
      <OurImpact />
      <OurClients />
      <Footer />
    </div>
  )
}
