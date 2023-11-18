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
    {
        icon : TbBrandGmail,
        value : "meghal@mymoma.in",
        href : "#footer"
    },
    {
        icon : TbPhone,
        value : "+91 9810196086",
        href: "#footer"
    },
]

const Footer = () => {
    return (
        <section id="footer" className={poppins.className + " footer minh-screen lg:min-h-[50vh] flex lg:flex-row flex-col items-center bg-bgpurple justify-evenly px-5 lg:px-20 py-16 text-bgwhite"}>
            <div className="lg:w-1/3">
                <Image src={BigLogo} alt="logo" className="h-[15vh] lg:h-full object-contain" />
            </div>
            <div className="flex md:flex-row flex-col justify-between lg:justify-around gap-16 lg:w-2/3 pt-5 md:pt-0">
                <div className="flex flex-col justify-center items-center md:items-start md:justify-start gap-2 md:gap-5">
                    {navItems.map((data,i)=>{
                        return (
                            <Link key={i} href={data.href}>
                                <h1 className="text-bgwhite text-[14px] md:text-[18px] md:font-semibold font-normal text-center md:text-left">{data.title}</h1>
                            </Link>
                        )
                    })}
                </div>
                <div className="md:flex flex-col gap-5 hidden md:visible">
                    {contact.map((data,i)=>{
                        return (
                            <div key={i} className="flex text-bgwhite text-3xl items-center gap-2">
                                <data.icon />
                                {data.href === "#footer" ? <h1 className="text-bgwhite text-[18px]">{data.value}</h1> : (<Link href={data.href} target={ data.href === "#footer" ? "" : "_blank"}>
                                    <h1 className="text-bgwhite text-[18px]">{data.value}</h1>
                                </Link>)}
                            </div>
                        )
                    })}
                </div>
                <div className="visible md:hidden flex flex-col items-center justify-center gap-10">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <h1 className="font-semibold text-[18px]">
                            Follow Us On
                        </h1>
                        <div className="flex items-center justify-center text-3xl gap-5">
                            <TbBrandInstagram />
                            <TbBrandLinkedin />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <h1 className="text-[18px] font-semibold">
                            Contact Us at
                        </h1>
                        <p className="text-[14px]">
                            meghal@mymoma.in
                        </p>
                        <p className="text-[14px]">
                            +91 9810196086
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Footer;