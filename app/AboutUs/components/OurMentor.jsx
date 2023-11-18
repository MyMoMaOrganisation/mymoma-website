import mentors from '@/app/AboutUs/components/data/Mentors'
import Image from 'next/image';

import { Poppins } from 'next/font/google';

const poppins = Poppins({weight:["100",'200','300','400','500','600','700','800','900'],subsets:['latin']})

const OurMentors = () => {
    return (
        <div className={poppins.className + " py-20 min-h-screen flex flex-col items-center justify-center"}>
            <div className="flex flex-col items-center">
                <h1 className="lg:text-[47px] text-[40px] font-semibold pb-5">Our Advisors</h1>
                <div className='h-[3px] w-[50%] bg-bgpurple'></div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 pt-20 gap-x-5 gap-y-5'>
                {mentors.map((data, i)=>{
                    return (
                        <div key={i} className=' group relative'>
                            <div className='bg-bgpurple/80 absolute h-0 w-[100%] group-hover:opacity-100 opacity-0 transition-all ease-in-out flex flex-col items-center justify-center text-bgwhite p-2 group-hover:h-full duration-500 bottom-0 delay-75 gap-2'>
                                <h1 className='lg:text-[26px] text-[25px] font-semibold text-center'>{data.name}</h1>
                                <h1 className='lg:text-[26px] text-[25px] text-center'>{data.position}</h1>
                                <h1 className='lg:text-[18px] text-[15px] text-center'>{data.College}</h1>
                            </div>
                            <Image src={data.image} alt={data.name + "'s photo"} />
                        </div>
                        )
                    })}
            </div>
        </div>
    );
}
 
export default OurMentors;