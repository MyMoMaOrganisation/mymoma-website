import Image from 'next/image'
import design from '../Assets/HeroBackgroundDesign.png'
import illustration from '../Assets/Illustration.png'

const Hero = () => {
    return (
        <div className='relative min-h-[101vh] bg-[#EDB4FE] rounded-b-[35px]'>
            <div className='absolute w-full h-[100vh] bg-bgpurple rounded-b-[35px]'></div>
            <Image src={design} alt='design' className='absolute w-full h-[100vh] object-fill' />
            <div className='flex items-center justify-center w-[100vw] h-[100vh] absolute px-20 gap-20'>
                <div className='w-5/12'>
                    <Image src={illustration} alt='illustration' className='object-fill' />
                </div>
                <div className='flex flex-col justify-center w-5/12 gap-10'>
                    <div className="flex flex-col pt-20 pb-20">
                        <h1 className="text-[47px] font-black text-bgwhite">
                            Your Journey Starts <span className='italic'>HERE</span>
                        </h1>
                        <div className='h-[3px] w-[75%] bg-bgwhite'></div>
                    </div>
                    <p className='text-bgwhite text-[18px]'>
                    Elevate your career while creating a positive impact at My Moment of Makeover (MyMoMa). Join hands with a passionate community that's dedicated to redefining business landscapes and fostering inclusivity. Your journey towards a more inclusive and innovative future begins with MyMoMa.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;