import Image from 'next/image'
import design from '../Assets/HeroBackgroundDesign.png'
import illustration from '../Assets/Illustration.png'

const Hero = () => {
    return (
        <div className=' h-fit lg:h-[100vh] bg-[#EDB4FE] pb-5 rounded-b-[35px]'>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-center w-[100vw] h-fit lg:h-[97.5vh] px-5 lg:px-20 gap-20 relative bg-bgpurple rounded-b-[35px] py-20'>
                <div className='lg:w-5/12 z-10'>
                    <Image src={illustration} alt='illustration' className='object-fill' />
                </div>
                <div className='flex flex-col justify-center lg:w-5/12 gap-5 lg:gap-10'>
                    <div className="flex items-center lg:items-start flex-col py-10 lg:pt-20 lg:pb-20">
                        <h1 className="lg:text-[47px] text-[40px] font-semibold text-center lg:text-left text-bgwhite">
                            Your Journey Starts <span className='italic font-bold'>HERE</span>
                        </h1>
                        <div className='h-[3px] w-[50%] bg-bgwhite'></div>
                    </div>
                    <p className='text-bgwhite lg:text-[18px] text-[15px]'>
                    Elevate your career while creating a positive impact at My Moment of Makeover (MyMoMa). Join hands with a passionate community that's dedicated to redefining business landscapes and fostering inclusivity. Your journey towards a more inclusive and innovative future begins with MyMoMa.
                    </p>
                </div>
                <Image src={design} alt='design' className='absolute w-full h-full object-cover rounded-b-[35px]' />
            </div>
        </div>
    );
}
 
export default Hero;