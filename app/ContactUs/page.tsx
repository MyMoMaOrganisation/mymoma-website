import Form from './components/Form'
import Connect from './components/Connect'

import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer/Footer';

const poppins = Poppins({weight:["100",'200','300','400','500','600','700','800','900'],subsets:['latin']})

const ContactUs = () => {
    return (
        <section className={poppins.className + " min-h-screen bg-bgwhite"}>
            <Form />
            <Connect />
            <Footer />
        </section>
    );
}
 
export default ContactUs;