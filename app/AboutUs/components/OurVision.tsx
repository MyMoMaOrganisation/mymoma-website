import ourVision from '@/Assets/Images/OurVision.png'
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({weight:["100",'200','300','400','500','600','700','800','900'],subsets:['latin']})

const OurVision = () => {
    return (
        <div className={poppins.className + " bg-bgwhite min-w-screen min-h-screen flex items-center justify-center gap-20 p-10"}>
            <div className='flex flex-col-reverse lg:flex-row gap-10 xl:gap-20 justify-center items-center'>
                <div className='lg:w-fit w-11/12 flex items-center justify-center'>
                    <Image src={ourVision} alt='image' className='' />
                </div>
                <div className='lg:w-5/12 w-10/12'>
                    <div className='flex flex-col relative gap-10 pt-20 lg:pt-40'>
                        <div className='flex flex-col items-center lg:items-start'>
                            <h1 className='text-[47px] font-black text-center lg:text-left'>Our Vision</h1>
                            <div className='h-[3px] w-[300px] bg-bgpurple'></div>
                        </div>
                        <div className='relative flex'>
                            {/* <div className='absolute h-[130%] w-[90vw] lg:w-[50vw] left-[-10vw] lg:left-[-10vw] flex rounded-lg opacity-0 lg:opacity-100'>
                                <div className='w-[10px] bg-bgpurple rounded-tl-lg rounded-bl-lg'></div>
                                <div className='w-full bg-bgpurple/30 rounded-tr-lg rounded-br-lg'></div>
                            </div> */}
                            <div className='w-[10px] bg-bgpurple rounded-tl-lg rounded-bl-lg'></div>
                            <div className='bg-bgpurple/30 px-5 w-full rounded-tr-lg rounded-br-lg'>
                                <p className='text-[18px] py-5 lg:py-10 text-justify lg:pr-10'>
                                <span className='font-bold italic'>Our vision is a world where every woman and member of the LGBTQIA+ community stands as a fearless entrepreneur,</span>
                                <br /> 
                                their unique brilliance ignited, and their dreams amplified. 
                                We envision breaking down all barriers to success, fostering a global network of empowered individuals, and creating a landscape where diversity and innovation flourish
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default OurVision;