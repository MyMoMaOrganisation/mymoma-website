import React, { useState } from 'react'
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from './anim';
import Link from './Link';
import { TbBrandInstagram, TbBrandLinkedin } from 'react-icons/tb';

import { Poppins } from 'next/font/google';
const poppins = Poppins({weight:["100",'200','300','400','500','600','700','800','900'],subsets:['latin']})

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/AboutUs",
  },
  {
    title: "Our Projects",
    href: "/OurProjects",
  },
  {
    title: "Join Us",
    href: "/JoinUs",
  },
  {
    title: "Contact Us",
    href: "/ContactUs",
  },
]

const contact = [
  {
      icon : TbBrandInstagram,
      value : "@my.mo.ma",
      href : "https://www.instagram.com/my.mo.ma/",
  },
  {
      icon : TbBrandLinkedin,
      value : "MyMoMa- My Moment of Makeover",
      href : "https://www.linkedin.com/company/mymoma/",
  },
]

export default function Menu () {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={poppins.className + " h-full w-full bg-bgpink fixed top-0 right-0 text-black z-10"}
      >
       <div className={" box-border h-full p-10 lg:p-20 flex flex-col justify-between"}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="flex flex-col lg:text-[47px] text-[40px] gap-[12px] mt-5 lg:mt-[80px] justify-between">
                    {
                      navItems.map( (data, index) => {
                        return(
                          <div className='flex gap-10 items-center'>
                            <Link 
                            key={index} 
                            data={{...data, index}} 
                            isActive={selectedIndicator == data.href} 
                            setSelectedIndicator={setSelectedIndicator}>
                            </Link>
                          </div>
                        )
                      })
                    }
            </div>
            <div className='flex gap-2 items-center'>
              <h1 className='text-[24px] font-medium'>Contact Us On:</h1>
              {contact.map((data ,i) => {
                return (
                    <div>
                      <a href={data.href} target='_blank' className='text-4xl'>
                        <data.icon />
                      </a>
                    </div>
                  )
                })}
            </div>
        </div>
    </motion.div>
  )
}