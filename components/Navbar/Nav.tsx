'use client'

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./styles.module.scss"
import { AnimatePresence } from "framer-motion";
import Menu from "./Hambruger";
import { Holtwood_One_SC } from "next/font/google";
import logo from '@/Assets/Images/White 1.png'
import Link from "next/link";

const holt = Holtwood_One_SC({weight:["400"], subsets:["latin"]})

const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About US",
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

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    const logoRef = useRef(null)
    const menuRef = useRef(null)
    const [isHam, setIsHam] = useState(false)

    useLayoutEffect(()=>{
        window.addEventListener("resize", () => {
            window.location.reload()
        })

        const windowWidth = window.innerWidth

        if(windowWidth <= 750) {
            setIsHam(false)
        } else {
            setIsHam(true)
        }
    })

    return (
        <nav className=" flex justify-between items-center pr-5 lg:px-10 fixed top-0 py-3 md:py-2 z-5 bg-[#7556FB] w-screen overflow-x-hidden z-50" ref={menuRef}>
            <div className={holt.className} ref={logoRef}>
                <Image src={logo} alt="mymoma-logo" className="lg:h-[75px] h-[60px] object-contain"/>
            </div>
            {!isHam && 
                <div id="hamburger" onClick={() => setIsActive(!isActive)} className={styles.button} ref={logoRef}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </div>
            }
            <AnimatePresence mode="wait">
                {isActive && <Menu />}
            </AnimatePresence>

            {isHam &&
                <div className="flex gap-5 lg:gap-10 text-base lg:text-xl font-semibold text-white">
                    {navItems.map((data,i) => {
                        return (
                            <div key={i}>
                                <Link href={data.href}>
                                    <h1>{data.title}</h1>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            }
        </nav>
    );
}
 
export default Navbar;