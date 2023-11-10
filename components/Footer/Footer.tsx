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
        <section id="footer" className={poppins.className + " footer h-screen lg:h-[50vh] flex lg:flex-row flex-col items-center bg-bgpurple justify-evenly px-5 lg:px-20 py-16"}>
            <div className="lg:w-1/3">
                <Image src={BigLogo} alt="logo" />
            </div>
            <div className="flex md:flex-row flex-col justify-between lg:justify-around gap-16 lg:w-2/3">
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
                                {data.href === "#footer" ? <h1 className="text-bgwhite text-[18px]">{data.value}</h1> : (<Link href={data.href} target={ data.href === "#footer" ? "" : "_blank"}>
                                    <h1 className="text-bgwhite text-[18px]">{data.value}</h1>
                                </Link>)}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
 
export default Footer;