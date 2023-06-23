import './Home.css'
import Banner from "../Banner/Banner";
import Doctors from '../../../components/Doctors/Doctors';
import MakeAppointment from '../../../components/MakeAppointment/MakeAppointment';
import PremiumButtons from '../../../components/PremiumButtons/PremiumButtons';
import { Helmet } from 'react-helmet';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
// import ContactInfo from '../../../components/ContactInfo/ContactInfo';

const Home = () => {
    return (
        <section>

            {/* TODO: https://www.airtable.com/ try this one style add atleast engineered for enterprice part */}

            <Helmet title='Home | RSH'/>
            
            {/* <ContactInfo></ContactInfo> */}
            <Banner></Banner>
            <PremiumButtons></PremiumButtons>

            {/* Consultants */}

            <div className='consultants-container'>
                <SectionTitle 
                heading="Our Consultants"
                subHeading="Quality consultation server is our commitment"
                />
                
                <Doctors></Doctors>
            </div>

            {/* Make Appointment */}
            <MakeAppointment></MakeAppointment>
            
        </section>
    );
};

export default Home;