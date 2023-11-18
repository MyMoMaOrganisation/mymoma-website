import Image from "next/image";
import illustration from '@/Assets/Images/ImpactModel.png'

import { Poppins } from 'next/font/google';

const poppins = Poppins({weight:["100",'200','300','400','500','600','700','800','900'],subsets:['latin']})

const model = [
    {
        color: "#ECB4FE",
        heading : "Getting to Know the Client",
        content : "Understand the client's mission and needs."
    },
    {
        color: "#D09AE6",
        heading : "Identifying the Gaps and Constraints",
        content : "Assess the client's resources and constraints."
    },
    {
        color: "#AB79C7",
        heading : "Getting to Know the Client",
        content : "Collaborate, analyze, research, implement, and provide tailored solutions."
    },
    {
        color: "#8E5FAF",
        heading : "Implementation",
        content : "Put the tailored solutions into action."
    },
    {
        color: "#75499B",
        heading : "Client Follow-Up",
        content : "Evaluate solution effectiveness and gather client feedback."
    },
]

const ImpactModel = () => {
    return (
        <div className={poppins.className + " flex flex-col justify-center items-center min-h-screen bg-bgwhite py-10 lg:py-20 gap-16"}>
            <div className="lg:w-11/12">
                <div className="flex flex-col items-center pt-20 pb-20">
                    <h1 className="lg:text-[47px] text-[40px] font-semibold text-center">Our Impact Model</h1>
                    <div className='h-[3px] w-[50%] bg-bgpurple'></div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-10">
                    <div className="flex flex-col gap-1 justify-center w-10/12 lg:w-7/12">
                        {
                            model.map((data, i)=>{ return(
                                <div key={i} className="flex items-center gap-5 lg:gap-20 mt-[-20px]">
                                    <div className=" bg-bgwhite rounded-t-[25px]">
                                        <div className="h-[20px] w-[48px]"></div>
                                        <div style={{backgroundColor: data.color}} className={ " h-[12.5vh] w-[48px] rounded-t-[25px] rounded-b-[5px]"}></div>
                                    </div>
                                    <div className="text-black">
                                        <h1 className="lg:text-[29px] text-[18px] font-semibold">{data.heading}</h1>
                                        <p className="lg:text-[18px] text-[15px]">{data.content}</p>
                                    </div>
                            </div>
                            )})
                        }
                    </div>
                    <div className="p-0 w-10/12 lg:w-5/12">
                        <Image src={illustration} alt="illustration" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ImpactModel;