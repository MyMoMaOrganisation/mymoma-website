const distinctions = [
    {
        distinct : "Our Diverse Team",
        description : "Diverse team of passionate student consultants from Harvard, IITs ,SRCC,SSCBS, BITS Pilani, Ashoka, LSR, St. Stephens and many more."
    },
    {
        distinct : "Industry Expert Advisors",
        description : "Industry expert advisors from Boston Consulting Group, Bain and company, Dalberg, Accenture, and D. E. Shaw"
    },
    {
        distinct : "Holistic Problem-Solving",
        description : "Holistic problem solving by focusing on business acumen, creativity, technical feasibility, and scientific theories"
    },
]

const Distinction = () => {
    return (
        <div className=" h-fit bg-gradient-to-b from-bgpurple to-bgwhite relative">
            <div className="h-full w-full py-20 2xl:px-40 lg:px-20 px-5 z-10 bg-transparent">
                <div className=" bg-gradient-to-t from-[#653A8D] to-[#EDB4FE] p-2 rounded-[25px]">
                    <div className="bg-bglightpurple py-20 lg:px-20 px-5 2xl:px-40 rounded-[25px] flex flex-col items-center">
                        <div className="pb-20 flex flex-col items-center">
                            <h1 className="text-[47px] font-semibold pb-5 text-center">
                                What sets Us Apart?
                            </h1>
                            <div className="w-[40%] h-[3px] bg-[#653A8D]"></div>
                        </div>
                        <div className="flex flex-col gap-10 text-center lg:text-left">
                            {distinctions.map((data,i) => {
                                return (
                                    <div key={i} className="flex flex-col lg:flex-row justify-between gap-5">
                                        <h1 className="font-semibold text-[29px] lg:w-4/12">
                                            {data.distinct}
                                        </h1>
                                        <p className="text-[18px] lg:w-7/12">
                                            {data.description}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="bg-bgpurple h-[30vh] w-full absolute top-0"></div> */}
        </div>
    );
}
 
export default Distinction;