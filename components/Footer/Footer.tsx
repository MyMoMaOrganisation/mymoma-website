import Image from "next/image";
import BigLogo from '@/Assets/Images/White 2.png'
import Link from "next/link";
import { Poppins } from "next/font/google";
import {TbBrandGmail, TbBrandInstagram, TbBrandLinkedin, TbPhone} from 'react-icons/tb'

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
      href: "/contact",
    },
]

const contact = [
    {
        icon : TbBrandInstagram,
        value : "@my.mo.ma"
    },
    {
        icon : TbBrandLinkedin,
        value : "MyMoMa- My Moment of Makeover"
    },
    {
        icon : TbBrandGmail,
        value : "meghal@mymoma.in"
    },
    {
        icon : TbPhone,
        value : "+91 9810196086"
    },
]

const Footer = () => {
    return (
        <section className={poppins.className + "h-screen lg:h-[50vh] flex lg:flex-row flex-col items-center bg-bgpurple justify-evenly px-5 lg:px-20 py-16"}>
            <div className="lg:w-1/3">
                <Image src={BigLogo} alt="logo" />
            </div>
            <div className="flex md:flex-row flex-col lg:justify-around gap-16 md:gap-0 lg:w-2/3">
                <div className="flex justify-between md:justify-start md:flex-col gap-2 md:gap-5">
                    {navItems.map((data,i)=>{
                        return (
                            <Link key={i} href={data.href}>
                                <h1 className="text-bgwhite text-[12px] md:text-[18px] font-semibold">{data.title}</h1>
                            </Link>
                        )
                    })}
                </div>
                <div className="flex flex-col gap-5">
                    {contact.map((data,i)=>{
                        return (
                            <div key={i} className="flex text-bgwhite text-3xl items-center gap-2">
                                <data.icon />
                                <Link href={""}>
                                    <h1 className="text-bgwhite text-[18px]">{data.value}</h1>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
 
export default Footer;