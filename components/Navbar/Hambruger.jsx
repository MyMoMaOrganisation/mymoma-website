import React, { useState } from 'react'
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from './anim';
import Link from './Link';
import Image from 'next/image';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Experience",
    href: "/experience",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function Menu() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={" h-full w-full bg-[#7556FB] fixed top-0 right-0 text-white z-10"}
      >
       <div className={" box-border h-full p-10 lg:p-20 flex flex-col justify-between"}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="flex flex-col lg:text-[5vw] text-5xl gap-[12px] mt-5 lg:mt-[80px]">
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
        </div>
    </motion.div>
  )
}