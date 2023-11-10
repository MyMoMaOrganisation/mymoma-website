const WhoWe = () => {
    return (
        <div className="h-fit bg-bgwhite px-5 lg:px-20 xl:px-40 py-20">
            <div className="pb-20">
                <h1 className="text-[47px] font-semibold pb-5">Who Are We?</h1>
                <div className="w-[30vw] h-[3px] bg-bgpurple"></div>
            </div>
            <div className="flex justify-end">
                <div className="lg:w-7/12">
                    <p className="lg:text-[29px] text-[18px]">
                    We are a team of passionate and goal- driven students from across India dedicated to the <span className=" font-semibold">upliftment and empowerment of women and LGBTQIA+ entrepreneurs</span> who often stand at the crossroads of a system riddled with structural and operational barriers.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default WhoWe;