import Link from 'next/link';
import {TbBrandInstagram, TbBrandLinkedin, TbBrandGmail} from 'react-icons/tb'


const socials = [
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
        href : "#connect"
    },
]

const Connect = () => {
    return (
        <div id='connect' className=''>
            <div className=" bg-bgpurple relative h-fit pt-5 rounded-t-[35px]">
                <div className=" bg-bglightpurple w-full h-fit top-5 rounded-t-[35px] py-20 lg:px-40 px-5 flex flex-col gap-16">
                    <div className="">
                        <h1 className="text-[47px] font-semibold">Ready to Connect with our vision?</h1>
                        <p className="text-[29px] pb-5">
                            Discover MyMoMa!
                        </p>
                        <div className='h-[3px] w-[30%] bg-bgpurple'></div>
                    </div>
                    <div>
                        <p className="text-[18px] lg:w-[37.5vw]">
                        Get involved, share the passion, and be part of our mission to ignite innovation and empower entrepreneurs. Your input matters to us. Let's connect and make a positive impact together.
                        </p>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
                        {socials.map((data,i) => {
                            return (
                                <div key={i} className='flex gap-2 items-center'>
                                    <div className='text-3xl text-bgpurple'>
                                        <data.icon />
                                    </div>
                                    {data.href === "#connect"?<h1 className='text-[18px] font-semibold'>{data.value}</h1> : (<Link href={data.href} target={data.href === "#connect" ? "" : "_blank"}>
                                        <h1 className='text-[18px] font-semibold'>{data.value}</h1>
                                    </Link>)}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Connect;