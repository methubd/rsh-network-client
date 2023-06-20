import './Home.css'
import Banner from "../Banner/Banner";
import { Link } from 'react-router-dom';
import { ArrowPathIcon, DocumentCheckIcon, ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid'
import Doctors from '../../../components/Doctors/Doctors';
import MakeAppointment from '../../../components/MakeAppointment/MakeAppointment';


const Home = () => {
    return (
        <section>
            
            <div className="contact-info-container">
                <p className="care-no">24/7 <span className='care-line'>CareLine</span> : <br /> 01708 458 000, 02 00 0000</p>
                <div>
                    <Link to='/doctors'><button className='btn-primary'>Available Doctors</button></Link>
                </div>
            </div>
            <Banner></Banner>

            {/* Premium Buttons */}
            <div className='premium-btn-container container'>

                <div className='single-btn-container'>
                    <button className='btn-premium-chat'> <ChatBubbleBottomCenterIcon className='btn-icons'/>LIVE CHAT<br />with Doctor</button>
                    <p className='btn-description'>20 Minute Consultation is Free, you may try your first Consultation</p>
                </div>

                <div className='single-btn-container'>
                    <button className='btn-premium-health'> <DocumentCheckIcon className='btn-icons'/>One Health Protections</button>
                    <p className='btn-description'>Including normal delivery, providing quality service.</p>
                </div>

                <div className='single-btn-container'>
                    <button className='btn-premium-medicine'> <ArrowPathIcon className='btn-icons'/>On Health Pharmacy</button>
                    <p className='btn-description'>Order Medicine Anywhere from Dhaka City</p>
                </div>

            </div>

            {/* Consultants */}

            <div className='consultants-container'>
                <h1 className='consultants-head'>Regular Consultants</h1>
                <hr />
                <Doctors></Doctors>
            </div>

            {/* Make Appointment */}
            <MakeAppointment></MakeAppointment>
            
        </section>
    );
};

export default Home;