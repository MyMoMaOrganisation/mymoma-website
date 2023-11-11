import Link from "next/link";

const Text = (buttonTextColor = "") => {
    return (
        <div className="absolute z-10">
            <h1 className="2xl:text-[76px] text-[47px] text-bgwhite font-semibold">Have a Business Dilemma?</h1>
            <h1 className="2xl:text-[76px] text-[29px] text-bgwhite pb-5 lg:pb-10">Reach Out to MyMoMa</h1>
            <p className="2xl:text-[29px] text-[18px] text-bgwhite pb-5 lg:pb-10">Get Ready to have YOUR Moment of Makeover!</p>
            <Link href={"/ContactUs"}>
                <button className="bg-bgwhite w-fit font-bold text-[18px] px-5 py-2 rounded-[10px]">
                    Get Started!
                </button>
            </Link>
        </div>
    );
}
 
export default Text;