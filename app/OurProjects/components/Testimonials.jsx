import Image from 'next/image';
import quotes from '../Assets/Images/quote.png'

import { Poppins } from 'next/font/google';

const poppins = Poppins({weight:["100",'200','300','400','500','600','700','800','900'],subsets:['latin']})

const testimonials = [
    {
        review : "It was a great experience working with you guys. You actually listened to the problems and issues that our small business is facing, did a thorough research about the possible solutions and put them across in a detailed way. Your team was very professional and always were prompt with responding to my queries. Thank you for your service.",
        name : "Balakrishna",
        position : "Founder, Yogam Pottery",
    },
    {
        review : "I really loved their work and the effort they have put to make the presentation so if you want any consultancy then they are the one to be contacted!",
        name:"Argha Naskar",
        position : "Founder, Argha's Chocolate Creations",
    },
    {
        review : "Team MyMoMa is doing a fantastic job and I would surely recommend it to my friends and family. The team is extremely dynamic and confident. It is a lovely experience seeing children of the same age as mine doing such a fantastic job. I hope they'll help lots of women entrepreneurs and help them break the bars.",
        name : "Anamika Sachdeva",
        position : "Founder, Handy Rasoi",
    },
    {
        review : " Hello Team MyMoMa, Thank you so much for your business consulting session. Your session gave me clarity on how to implement my business idea, next steps to be taken and make it a reality. Your wholehearted dedication in guiding me was commendable.It was clearly visible from the final document that you girls searched deeply on each and every point I mentioned in our first meeting. It was a value creating session for me as you not only guided me but also instilled in me the confidence that is required to start any business. I will definitely recommend others to use your services.",
        name : "Divya Grag",
        position : "Founder, Divya",
    },
    {
        review : "Thank you so much team for embellishing our business through their consultation using which we were able to resolve problems. They not only provided effective solutions but also completed the project under the given deadline. Overall, we are extremely pleased by their service.We thank MyMoMa for their extensive research and analysis critical for our nascent phase of marketing and branding. It is truly amazing to see women empowering each other!",
        name : "Samridhi Shoor",
        position : "Chief Executive Officer, UnMa",
    },
]

const Testimonials = () => {
    return (
        <div className={poppins.className + " min-h-screen bg-bgpink rounded-t-[35px] pl-5 lg:pl-10 xl:pl-40 pt-40"}>
            <div className="pb-10">
                <h1 className="text-[47px] font-black">What Our Clients say about Us</h1>
                <div className='h-[3px] w-[85%] lg:w-[50%] bg-bgpurple'></div>
            </div>
            <div className='w-full'>
                <div className='flex justify-between gap-5 lg:gap-10 overflow-x-auto pb-10 pr-20'>
                    {testimonials.map((data, i)=>{
                        return (
                            <div key={i} className='xl:min-h-[30vw] md:min-h-[30vw] min-h-[40vw] min-w-[85vw] md:min-w-[50vw] lg:min-w-[40vw] xl:min-w-[30vw] bg-bglightpurple relative p-5 pl-10 pt-10 lg:p-20 rounded-tr-[75px] lg:rounded-tr-[150px] flex flex-col justify-between'>
                                <div className='absolute top-5 left-5 w-[75px] lg:w-full'>
                                    <Image src={quotes} alt='quote' className='' />
                                </div>
                                <h1 className='md:text-[18px] text-[15px] pb-10 font-medium'>{data.review}</h1>
                                <div className='md:text-[18px] text-[15px]'>
                                    <p className='font-black pb-2'>{data.name}</p>
                                    <p className='font-bold'>{data.position}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
 
export default Testimonials;