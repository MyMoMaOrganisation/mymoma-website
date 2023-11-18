'use client'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'
import Hero from './components/Hero'
import WhoWe from './components/WhoWe'
import OurServices from './components/OurServices'
import Distinction from './components/Distinction'
import OurImpact from './components/OurImpact'
import OurClients from './components/OurClients'

import { Poppins } from 'next/font/google';
const poppins = Poppins({weight:["100",'200','300','400','500','600','700','800','900'],subsets:['latin']})

export default function Home() {
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
