import Link from "next/link";

import { Poppins } from 'next/font/google';

const poppins = Poppins({weight:["100",'200','300','400','500','600','700','800','900'],subsets:['latin']})

const Openings = () => {

    const jobs = [
        {
            positions : "Graphic Designer",
            description : "We are on the lookout for talented and driven Graphic Designers to join our dynamic team. Apply if you love working with brands across various industries and marketing needs.",
            form_link : "https://docs.google.com/forms/d/e/1FAIpQLSdjCrFmD1e-JE65wkzbHwpBFNywGsrZKePq1YEu8yEUv4rmbA/viewform",
            roles : ["Understanding the visual language of the assigned brand.", "Ideating and designing visually appealing creatives to boost the brand’s growth"],
            requirements : ["Proven experience as a Graphic Designer, with a strong portfolio showcasing work related to social media creatives and branding.", "Knowledge of Adobe Creative Suite (Illustrator, Photoshop) with a strong grasp over the fundamentals of design." ,"Excellent communication and collaboration skills to work with startup clients and internal teams.","Self-motivated and able to work independently in a remote setting."]
        },
    ]

    return (
        <div className={poppins.className + " bg-bgwhite px-5 xl:px-40 py-20 min-h-screen"}>
            <div className=" bg-gradient-to-t from-[#653A8D] to-[#EDB4FE] min-h-screen p-2 rounded-3xl">
                <div className="bg-[#F4EBFE] w-full min-h-screen rounded-3xl lg:px-20 px-5 2xl:px-40 py-10 lg:py-20">
                    <div className="flex flex-col items-center pb-20">
                        <h1 className="lg:text-[47px] text-[40px] font-semibold text-center pb-5">Current Openings</h1>
                        <div className='h-[3px] w-[50%] bg-[#653A8D]'></div>
                        <p className="lg:text-[18px] text-[15px] pt-10 lg:pt-20">
                            At MyMoMa, we're on the lookout for people like you who are ready to shape the future. If you're driven, passionate, and eager to make a difference, we want you on our team. Join us and let's make waves together even remotely.
                        </p>
                    </div>
                    <div>
                        {jobs.map((data, i) => {
                            return (
                                <div key={i}>
                                    <h1 className="lg:text-[29px] text-[25px] font-semibold pb-5 lg:pb-10">
                                        {data.positions}
                                    </h1>
                                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between">
                                        <div className="lg:w-4/12 flex flex-col gap-10">
                                            <h1 className="lg:text-[18px] text-[15px]">
                                                {data.description}
                                            </h1>
                                            <Link href={data.form_link} target="_blank">
                                                <p className="text-[#7556FB] lg:text-[18px] text-[15px] italic underline decoration-2 decoration-[#7556FB]">
                                                    Apply Here
                                                </p>
                                            </Link>
                                        </div>
                                        <div className="flex flex-col gap-5 lg:w-5/12">
                                            <h1 className="text-[#7556FB] lg:text-[18px] font-semibold text-[15px]">Key Roles</h1>
                                            <ul className="lg:text-[18px] text-[15px] list-disc pl-5">
                                                {data.roles.map((job, i)=>{
                                                    return (
                                                        <li key={i}>{job}</li>
                                                    )
                                                })}
                                            </ul>
                                            <h1 className="text-[#7556FB] lg:text-[18px] text-[15px] font-semibold pt-5 lg:pt-10">Requirements</h1>
                                            <ul className="lg:text-[18px] text-[15px] list-disc pl-5">
                                                {data.requirements.map((job, i)=>{
                                                    return (
                                                        <li key={i}>{job}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="lg:py-20 py-10 flex flex-col">
                <h1 className="lg:text-[47px] text-[40px] font-semibold pb-5">Have Something More?</h1>
                <div className='h-[3px] w-[50%] bg-bgpurple'></div>
                <p className="lg:text-[18px] text-[15px] pt-10 lg:pt-20">
                    Have  questions? Don’t fit into above JDs but still passionate to work with us?
                    <br/>
                    Write to us at <span className="font-bold underline decoration-black decoration-2">meghal@mymoma.in</span>
                </p>
            </div>
        </div>
    );
}
 
export default Openings;