import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar/Nav'

import { Poppins } from 'next/font/google';

const poppins = Poppins({weight:["100",'200','300','400','500','600','700','800','900'],subsets:['latin']})
export const metadata: Metadata = {
  title: 'MyMoMa - Your Moment of Makeover',
  description: 'We are a team of passionate and goal- driven students from across India dedicated to the upliftment and empowerment of  women and LGBTQIA+ entrepreneurs who often stand at the crossroads of a system riddled with structural and operational barriers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='overflow-x-hidden'>
      <Navbar />
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
