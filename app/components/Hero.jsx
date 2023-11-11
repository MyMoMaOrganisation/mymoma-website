import Image from "next/image";
import Hero3 from './Hero Components/Hero3'
import Hero1 from './Hero Components/Hero1'
import Hero2 from './Hero Components/Hero2'
import Hero4 from './Hero Components/Hero4'
import Text from "./Hero Components/Text";
import hero1 from '../assets/Group 55.png'
import hero2 from '../assets/hero2.png'
import hero3 from '../assets/hero3.png'
import hero4 from '../assets/hero4.png'
import { useEffect, useLayoutEffect, useState } from "react";

const background = [
    {
        image : hero1,
        color : "#7556FB",
        color2:"#EDB4FE"
    },
    {
        image : hero4,
        color : "#A074E8",
        color2 : "#EDB4FE"
    },
    {
        image : hero3,
        color : "#5EC0C9",
        color2 : "#C7FEB4"
    },
]

const Hero = () => {

    const [i, setI] = useState(0)

    useEffect(()=>{
        const interval = setInterval(() => {
            var j = i
            j++
            if(j<3){
                setI(j)
            }else{
                j = 0
                setI(j)
            }
        },7500)

        return () => clearInterval(interval)
    })

    return (
        // <div>
        //     <Hero3 />
        // </div>
        <div style={{backgroundColor : background[i].color2}} className=" min-h-screen rounded-b-[35px] transition-all ease-in-out">
            <div style={{backgroundColor : background[i].color, color : background[i].color}} className=" min-h-[98.5vh] w-full rounded-b-[35px] relative flex flex-col py-40 lg:py-0 lg:justify-center px-5 lg:px-20 xl:px-40 transition-al ease-in-out">
                <Text />
                {/* <div className="absolute z-10">
                    <h1 className="2xl:text-[76px] text-[47px] text-bgwhite font-semibold">Have a Business Dilemma?</h1>
                    <h1 className="2xl:text-[76px] text-[29px] text-bgwhite pb-5 lg:pb-10">Reach Out to MyMoMa</h1>
                    <p className="2xl:text-[29px] text-[18px] text-bgwhite pb-5 lg:pb-10">Get Ready to have YOUR Moment of Makeover!</p>
                    <button className="bg-bgwhite text-bgpurple w-fit font-bold text-[18px] px-5 py-2 rounded-[10px]">Get Started!</button>
                </div> */}
                <Image src={background[i].image} alt="hero image" className=" absolute right-0 bottom-0 rounded-b-[35px]" />
            </div>
        </div>
    );
}
 
export default Hero;