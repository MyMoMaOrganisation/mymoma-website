import FormComponent from './FormComponent'

const form = () => {
    return (
        <div className="lg:px-40 px-5 py-32 flex flex-col gap-20">
            <div className="">
                <p className="lg:text-[29px] text-[25px]">
                    Let's Partner
                </p>
                <h1 className="lg:text-[47px] text-[40px] font-semibold pb-5">Your Project, Our Expertise</h1>
                <div className='h-[3px] w-[50%] bg-bgpurple'></div>
            </div>
            <div className='flex lg:justify-end px-2'>
                <FormComponent />
            </div>
        </div>
    );
}
 
export default form;