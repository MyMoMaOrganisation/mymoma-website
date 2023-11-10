import Image from 'next/image'

import minds from '../Assets/Mindsets.png'
import change from '../Assets/Change.png'
import ideas from '../Assets/Ideas.png'
import unlock from '../Assets/Unlock.png'

const opportunities = [
    {
        image : minds,
        text : "Contribute to projects that transform industries and mindsets."
    },
    {
        image : change,
        text : "Drive change that empowers women and LGBTQIA+ entrepreneurs."
    },
    {
        image : ideas,
        text : "Collaborate with brilliant minds and mentors from diverse backgrounds."
    },
    {
        image : unlock,
        text : "Unlock your potential through continuous learning and skill development."
    },
]

const Embrace = () => {
    return (
        <div className="h-[80vh] bg-bgwhite py-20 flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-[47px] font-black">Embrace Opportunities</h1>
                <p className="text-[29px] text-center pb-5">
                    with MyMoMa
                </p>
                <div className='h-[3px] w-[20%] bg-bgpurple'></div>
            </div>
            <div className='grid grid-cols-2 px-80 gap-x-10 gap-y-10 pt-10'>
                {opportunities.map((opportunity, i)=>{
                    return (
                        <div key={i} className='flex items-center justify-center gap-10'>
                            <Image src={opportunity.image} alt='image' />
                            <p className='text-[18px]'>{opportunity.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default Embrace;