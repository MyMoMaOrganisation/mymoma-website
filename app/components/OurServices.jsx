import Image from "next/image";
import Expansion from '../assets/services/Expansion.png'
import Research from '../assets/services/Research.png'
import Consulting from '../assets/services/Product consulting.png'
import Pricing from '../assets/services/Pricing.png'
import Financial from '../assets/services/Financial.png'
import Feasibility from '../assets/services/Feasibility.png'
import Entry from '../assets/services/Entry.png'
import Diligence from '../assets/services/Diligence.png'
import Assistance from '../assets/services/Digital Assistance.png'
import chart from '../assets/Chart.png'
import { IoIosArrowForward } from "react-icons/io";

const services = [
    {
        image : Expansion,
        position : "Expansion Consulting",
    },
    {
        image : Pricing,
        position : "Pricing Strategy",
    },
    {
        image : Diligence,
        position : "Due Diligence Services",
    },
    {
        image : Entry,
        position : "Market Entry Assistance",
    },
    {
        image : Financial,
        position : "Financial Consulting",
    },
    {
        image : Research,
        position : "Market Research",
    },
    {
        image : Assistance,
        position : "Digital Assistance",
    },
    {
        image : Feasibility,
        position : "Project Feasibility",
    },
    {
        image : Consulting,
        position : "Product Consulting",
    },
]

const OurServices = () => {
    return (
        <div className="bg-bgwhite mt-[-1px]">
        <div className=" h-fit bg-bgpurple rounded-t-[35px] py-20 px-5 lg:px-20 2xl:px-40 relative text-bgwhite">
            <div className="pb-20 z-10">
                <p className="lg:text-[18px] text-[15px]">Your Problems</p>
                <h1 className="lg:text-[47px] text-[40px] font-semibold pb-5">Our Services</h1>
                <div className="w-[30vw] h-[3px] bg-bgwhite"></div>
            </div>
            <div className="flex flex-col lg:flex-row gap-20">
                <div className="lg:w-5/12 flex flex-col gap-20">
                    <div className="w-fit flex items-center gap-5">
                        <div className="items-center justify-center flex text-[47px] font-semibold w-5/12 h-full">
                            <Image alt="chart" src={chart} className="h-fit object-contain" />
                        </div>
                        <div className="w-4/12 text-[15px] lg:text-[18px]">
                            Only 13% of WLGBTQIA+ entrepreneurs have the access to business resources
                        </div>
                    </div>
                    <div>
                        <p className="lg:text-[18px] text-[15px]">
                        We aim to bridge this gap by providing businesses with a “makeover” i.e. <span className="font-semibold">diverse, innovative, holistic and affordable business consultancy</span> to improve their performance and implement changes that optimize their process in order to achieve success.
                        </p>
                    </div>
                </div>
                <div className='lg:w-7/12 relative'>
                <div className=" absolute w-[40%] mr-[-2px] lg:w-[10vw] right-0 bg-gradient-to-r from-bgpurple/0 to-bgpurple via-bgpurple/70 h-full flex items-center justify-end text-5xl">
                    <IoIosArrowForward />
                </div>
                <div className='flex justify-start gap-2 lg:gap-10 overflow-x-auto pr-20 py-10'>
                    {services.map((data, i)=>{
                        return (
                            <div className="p-1 bg-gradient-to-tl from-[#653A8D] to-[#ECB4FE] rounded-[20px]">
                                <div key={i} className='text-black bg-bglightpurple p-5 lg:p-10 flex flex-col items-center gap-5 lg:gap-10 h-full rounded-[20px]'>
                                    <div className="h-1/2">
                                        <Image src={data.image} alt="service image" className="h-[100%] object-contain" />
                                    </div>
                                    <h1 className="lg:w-[250px] w-[100px] text-center font-semibold lg:text-[29px] text-[15px]">{data.position}</h1>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default OurServices;