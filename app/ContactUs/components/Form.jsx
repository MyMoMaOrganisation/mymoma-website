import FormComponent from './FormComponent'

const form = () => {
    return (
        <div className="lg:px-40 px-5 py-32 flex flex-col gap-20">
            <div className="">
                <p className="text-[29px]">
                    Let's Partner
                </p>
                <h1 className="text-[47px] font-semibold pb-5">Your Project, Our Expertise</h1>
                <div className='h-[3px] w-[30%] bg-bgpurple'></div>
            </div>
            <div className='flex lg:justify-end px-2'>
                <FormComponent />
            </div>
        </div>
    );
}
 
export default form;