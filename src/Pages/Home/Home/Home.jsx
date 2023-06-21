import './Home.css'
import Banner from "../Banner/Banner";
import Doctors from '../../../components/Doctors/Doctors';
import MakeAppointment from '../../../components/MakeAppointment/MakeAppointment';
import PremiumButtons from '../../../components/PremiumButtons/PremiumButtons';
// import ContactInfo from '../../../components/ContactInfo/ContactInfo';

const Home = () => {
    return (
        <section>
            
            {/* <ContactInfo></ContactInfo> */}
            <Banner></Banner>
            <PremiumButtons></PremiumButtons>

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