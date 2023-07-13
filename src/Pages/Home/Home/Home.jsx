import './Home.css'
import Banner from "../Banner/Banner";
import Doctors from '../../../components/Doctors/Doctors';
import SubmitQuery from '../../../components/SubmitQuery/SubmitQuery';
import PremiumButtons from '../../../components/PremiumButtons/PremiumButtons';
import { Helmet } from 'react-helmet';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MedicalDepartments from '../MedicalDepartments/MedicalDepartments';
import Overview from '../Overview/Overview';
import PatientReview from '../PatientReview/PatientReview';

// import ContactInfo from '../../../components/ContactInfo/ContactInfo';

const Home = () => {   
    
    return (
        <section className='fade-in'>

            {/* TODO: https://www.airtable.com/ try this one style add atleast engineered for enterprice part */}

            <Helmet title='Home | RSH'/>
            
            {/* <ContactInfo></ContactInfo> */}
            <Banner></Banner>
            <PremiumButtons></PremiumButtons>
            <MedicalDepartments></MedicalDepartments>

            {/* Consultants */}

            <div className='consultants-container'>
                <SectionTitle 
                heading="Team Of Consultants"
                subHeading="Quality consultation server is our commitment"
                />
                
                <div>
                    <Doctors></Doctors>
                    <Overview></Overview>
                    <SectionTitle 
                    heading="Whats our patients saying"
                    subHeading="We are providing world class health service from starting"
                    />
                    <PatientReview></PatientReview>
                </div>
            </div>

            {/* Make Appointment */}
            {/* <SubmitQuery></SubmitQuery> */}
            
        </section>
    );
};

export default Home;