import team from '@/app/AboutUs/components/data/Members'
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({weight:["100",'200','300','400','500','600','700','800','900'],subsets:['latin']})

const MeetOurTeam = () => {
    return (
        <div className={poppins.className + " bg-bgpurple min-h-screen flex flex-col items-center justify-center relative rounded-[35px]"}>
            <div className='h-5'></div>
            <div className=" min-h-screen w-full bg-bglightpurple py-40 rounded-[35px] flex flex-col items-center justify-center">
                <div className="flex flex-col items-center">
                    <h1 className="text-[47px] font-black">Meet Our Team</h1>
                    <div className='h-[3px] w-[150px] bg-bgpurple'></div>
                    <p className="text-[29px] pt-16 text-center p-5">
                    The People Responsible for
                    <br />
                    <span className='font-semibold'>YOUR Moment of Makeover</span>
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 pt-40 gap-x-5 gap-y-5'>
                    {team.map((data, i)=>{
                        return (
                            <div key={i} className=' group relative'>
                                <div className='bg-bgpurple/80 absolute h-0 w-[100%] group-hover:opacity-100 opacity-0 transition-all ease-in-out flex flex-col items-center justify-center text-bgwhite p-2 group-hover:h-full duration-500 bottom-0 delay-75'>
                                    <h1 className='text-[26px] font-semibold text-center'>{data.name}</h1>
                                    <h1 className='text-[26px] text-center'>{data.position}</h1>
                                    <h1 className='text-[18px] text-center'>{data.College}</h1>
                                </div>
                                <Image src={data.image} alt={data.name + "'s photo"} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='h-5'></div>
        </div>
    );
}
 
export default MeetOurTeam;