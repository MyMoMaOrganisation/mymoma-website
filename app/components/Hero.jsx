import Image from "next/image";
import hero1 from '../assets/Group 55.png'

const Hero = () => {
    return (
        <div className=" min-h-screen bg-[#EDB4FE] rounded-b-[35px]">
            <div className=" min-h-[97.5vh] w-full bg-bgpurple rounded-b-[35px] relative flex flex-col py-40 lg:py-0 lg:justify-center px-5 lg:px-20 xl:px-40">
                <div className="absolute z-10">
                    <h1 className="2xl:text-[76px] text-[47px] text-bgwhite font-semibold">Have a Business Dilemma?</h1>
                    <h1 className="2xl:text-[76px] text-[29px] text-bgwhite pb-5 lg:pb-10">Reach Out to MyMoMa</h1>
                    <p className="2xl:text-[29px] text-[18px] text-bgwhite pb-5 lg:pb-10">Get Ready to have YOUR Moment of Makeover!</p>
                    <button className="bg-bgwhite text-bgpurple w-fit font-bold text-[18px] px-5 py-2 rounded-[10px]">Get Started!</button>
                </div>
                <Image src={hero1} alt="hero image" className=" absolute right-0 bottom-0 rounded-b-[35px]" />
            </div>
        </div>
    );
}
 
export default Hero;