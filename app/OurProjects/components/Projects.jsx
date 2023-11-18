'use client'

import Image from 'next/image'

import Yogam from '@/app/OurProjects/Assets/Yogam.png'
import Argha from '@/app/OurProjects/Assets/Argha.png'
import Divya from '@/app/OurProjects/Assets/Divya.png'
import Handy from '@/app/OurProjects/Assets/Handy.png'
import UnMa from '@/app/OurProjects/Assets/UnMa.png'
import { useState } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({weight:["100",'200','300','400','500','600','700','800','900'],subsets:['latin']})

const project = [
    {
        logo : Yogam,
        name: "Yogam Pottery",
        description : "Yogam Pottery, a pottery studio in Bangalore, specialises in ceramics and conducts pottery workshops. Led by Mr. Balakrishna, the studio focuses on creating and selling diverse ceramic products, emphasising craftsmanship to express passion and individuality.",
        deliverables : ["Sales and Distribution", "Pricing Strategy", "Branding and Marketing", "Packaging & Logistics", "Delivery", "Expansion Ideas"]
    },
    {
        logo : Argha,
        name: "Argha's Chocolate Creations",
        description : "Argha's Chocolate Creations, a Kolkata chocolate shop, founded by 18-year-old Argha Naskar (he/him/they) , specialises in handmade chocolates, cakes, and Bengali cuisine. Argha, driven by his passion for cooking, started the business during the pandemic, offering a range of artisanal treats.",
        deliverables : ["Sales and Distribution", "Pricing Strategy", "Branding & Marketing", "Packaging & Logistics", "Pricing Strategy", "Expansion Ideas"]
    },
    {
        logo : Handy,
        name: "Handy Rasoi",
        description : "Handy Rasoi, a Dehradun packaged food brand, provides healthy breakfast and evening snack options. Offering 68 preservative-free products, the brand promotes natural and nutritious eating. All items are available on Amazon, reflecting their commitment to enabling healthier living by its 100% natural nutritious products.",
        deliverables : ["Sales and Distribution", "Pricing Strategy", "Branding and Marketing", "Packaging & Logistics", "Expansion Ideas","Competitor Analysis"]
    },
    {
        logo : Divya,
        name: "Divya",
        description : "Our client, Divya has been working at a mental health NGO for more than 2 years. She came to us with a dream of opening up her own mental health and life coaching service so that she could people be the best versions of themselves.",
        deliverables : ["Identifying and Defining Value Proposition", "Pricing Strategy", "Process Mapping", "Lean Canvas Creation", "Identifying certification programs", "Marketing & Branding","Validating ideas to turn them into Minimum Viable Products (MVPs)","Competitor Analysis"]
    },
    {
        logo : UnMa,
        name: "UnMa",
        description : "UnMa stands as India's inaugural University Mart, driven by AI, offering a unique shopping experience for the nation's youth. Catering to students, it's a student-centric online marketplace meeting essential needs affordably and efficiently.",
        deliverables : ["Branding", "Marketing", "Competitor Analysis", "Pricing Strategy", "User Experience Optimisation", "Product Customisation"]
    },
]

const Projects = () => {

    const states = []

    for (let i = 0; i < project.length ; i++) {
        states.push(useState(true))
    }

    return (
        <div className={poppins.className + " min-h-screen flex flex-col justify-center items-center gap-10 py-20 lg:py-40 bg-bgwhite"}>
            <div className="flex flex-col items-center pb-20">
                <h1 className="lg:text-[47px] text-[40px] font-semibold">Our Projects</h1>
                <div className='h-[3px] w-[50%] bg-bgpurple'></div>
            </div>
            {
               project.map((data , i)=>{return(
                <div key={i} className=' transition-all duration-700 ease-in-out flex flex-col justify-center items-center'>
                    <div className={(states[i][0] ? 'h-fit overflow-hidden' : 'lg:items-start') + ' transition-all ease-in-out duration-700 bg-[#F4EBFE] w-10/12 lg:w-8/12 flex flex-col lg:flex-row py-10 px-5 lg:p-16 gap-10 lg:gap-20 shadow-lg shadow-black/30 rounded-[23px] items-center lg:items-start' }>
                        <div className=' w-fit lg:w-2/12'>
                            <Image src={data.logo} alt='logo' className=' rounded-tl-[50px] rounded-[7px] border-r-8 border-b-8 border-[#EDB4FE]' />
                        </div>
                        <div className='flex flex-col gap-10 lg:w-8/12'>
                            <h1 className={'lg:text-[29px] text-[25px] text-[#653A8D] font-bold'}>
                                {data.name}
                            </h1>
                            <p className={'lg:text-[18px] text-[15px]'}>
                                {data.description}
                            </p>
                            <h1 className={states[i][0] ? 'hidden' : 'text-[#7556FB] font-semibold lg:text-[29px] text-[25px]'}>Project Deliverables</h1>
                            <ul className={states[i][0] ? "hidden" : 'grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-10 list-disc px-5'}>
                                {data.deliverables.map((deliverable , i)=>{return (
                                    <li key={i} className='lg:text-[18px] text-[15px]'>{deliverable}</li>
                                )})}
                            </ul>
                            <button onClick={() => states[i][1](!states[i][0])} className='w-fit text-[#626262] italic font-light underline underline-offset-1 decoration-1 decoration-[#626262]'>{states[i][0] ? "See more" : "See less"}</button>
                        </div>
                    </div>
                </div>
               )}) 
            }
        </div>
    );
}
 
export default Projects;