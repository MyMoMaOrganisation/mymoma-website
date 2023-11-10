// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import toast, {Toaster} from 'react-hot-toast';
function ContactForm() {
  const [state, handleSubmit] = useForm("mdorjrrw");
  const notify = () => toast("Email sent Successfully")
  return (
      <form onSubmit={handleSubmit} className='flex flex-col w-full lg:w-1/2 gap-10'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name' className='text-[29px] font-semibold'>
            Your Name
          </label>
          <input
            id="name"
            type='text' 
            name="Name"
            placeholder='Your name'
            className='bg-bglightpurple rounded-tr-[35px] h-[50px] px-2 placeholder:text-black placeholder:font-light placeholder:italic border-b-bgpurple border-b-4 placeholder:text-[18px]'
          />
        </div>
        <div className='flex flex-col gap-2'>
        <label htmlFor='phone number' className='text-[29px] font-semibold'>
          Phone Number
        </label>
        <input
          id="phone"
          type='text' 
          name="Phone"
          placeholder='Phone Number'
          className='bg-bglightpurple rounded-tr-[35px] h-[50px] px-2 placeholder:text-black placeholder:font-light placeholder:italic border-b-bgpurple border-b-4 placeholder:text-[18px]'
        />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="email" className='text-[29px] font-semibold'>
            Email Address
          </label>
          <input
            id="email"
            type="email" 
            name="Email Id"
            placeholder='Email Id'
            className='bg-bglightpurple rounded-tr-[35px] h-[50px] px-2 placeholder:text-black placeholder:font-light placeholder:italic border-b-bgpurple border-b-4 placeholder:text-[18px]'
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-[29px] font-semibold'>
            Your Message
          </label>
          <textarea
            id="message"
            name="Message"
            placeholder='Any other important information'
            className='bg-bglightpurple rounded-tr-[35px] h-[200px] px-2 placeholder:text-black placeholder:font-light placeholder:italic border-b-bgpurple border-b-4 placeholder:text-[18px] py-2'
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <div className='flex gap-5 items-center'>
          <button type="submit" disabled={state.submitting} onClick={notify} className='bg-bgpurple w-fit text-bgwhite font-semibold text-[18px] px-5 py-2 rounded-[10px]'>
            Submit
          </button>
          <button type='reset' className='text-[18px] italic'>Reset Form</button>
        </div>
        <Toaster />
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;