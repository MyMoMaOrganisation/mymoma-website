import Link from "next/link";

const Text = (buttonTextColor = "") => {
    return (
        <div className="absolute z-10">
            <h1 className="2xl:text-[65px] xl:text-[60px] lg:text-[50px] md:text-[47px] text-[40px] text-bgwhite font-semibold">Have a Business Dilemma?</h1>
            <h1 className="2xl:text-[40px] xl:text-[37px] lg:text-[31px] md:text-[29px] font-medium text-[25px] text-bgwhite pb-5 lg:pb-10">Reach Out to MyMoMa</h1>
            <p className="2xl:text-[25px] xl:text-[23px] lg:text-[19px] md:text-[18px] text-[15px] text-bgwhite pb-5 lg:pb-10">Get Ready to have YOUR Moment of Makeover!</p>
            <Link href={"/ContactUs"}>
                <button className="bg-bgwhite w-fit font-bold text-[15px] lg:px-5 px-3 py-2 rounded-[10px]">
                    Get Started!
                </button>
            </Link>
        </div>
    );
}
 
export default Text;