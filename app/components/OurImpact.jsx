import Image from "next/image";
import impact from '../assets/Impact.png'

const impacts = [
    {
        quantity : "55+",
        description : "WLGBTQIA+ Led enterprises impacted"
    },
    {
        quantity : "700K+",
        description : "Revenue milestone achieved for clients"
    },
    {
        quantity : "10+",
        description : "Industries served, catering to multitude of sectors"
    },
]

const OurImpact = () => {
    return (
        <div className="h-fit flex flex-col lg:flex-row lg:px-20 2xl:px-40 items-center justify-center gap-20 w-full py-10 lg:py-40 bg-bgwhite mt-[-5px]">
            <div className="lg:w-6/12 px-5">
                <h1 className="lg:text-[47px] text-[40px] font-semibold pb-5">Our Impact</h1>
                <div className="w-[50%] h-[3px] bg-bgpurple"></div>
                <p className="lg:text-[29px] text-[25px] italic pt-10 pb-10">
                    Transforming ONE WLGBTQIA+ Led Business at a Time
                </p>
                <div className="lg:flex lg:flex-col grid grid-cols-2 gap-10">
                    {impacts.map((data,i)=>{
                        return (
                            <div className="flex flex-col lg:flex-row items-center gap-5 bg-bglightpurple rounded-tl-[35px] p-5 shadow-lg shadow-black/20">
                                <h1 className="lg:text-[76px] text-[40px] font-semibold text-bgpurple">{data.quantity}</h1>
                                <p className="lg:text-[29px] text-[15px] text-center lg:text-left">{data.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Image src={impact} alt="impact" className="lg:w-4/12 lg:h-[50%] px-5 rounded-[50px] lg:rounded-[0px] lg:rounded-br-[127px] object-contain" />
        </div>
    );
}
 
export default OurImpact;