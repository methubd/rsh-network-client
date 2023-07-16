import './Home.css'
import Banner from "../Banner/Banner";
import Doctors from '../../../components/Doctors/Doctors';
import PremiumButtons from '../../../components/PremiumButtons/PremiumButtons';
import { Helmet } from 'react-helmet';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MedicalDepartments from '../MedicalDepartments/MedicalDepartments';
import Overview from '../Overview/Overview';
import PatientReview from '../PatientReview/PatientReview';
import HealthPackages from '../HealthPackages/HealthPackages';
import SubmitQuery from '../../../components/SubmitQuery/SubmitQuery';
import OurPartners from '../OurPartners/OurPartners';
import AppointmentBookBanner from '../AppointmentBookBanner/AppointmentBookBanner';



// import ContactInfo from '../../../components/ContactInfo/ContactInfo';

const Home = () => {   
    
    return (
        <section className='fade-in'>

            {/* TODO: https://www.airtable.com/ try this one style add atleast engineered for enterprice part */}

            <Helmet title='Home | RSH'/>
            
            {/* <ContactInfo></ContactInfo> */}
            <Banner></Banner>
            <PremiumButtons></PremiumButtons>
            <SectionTitle 
                heading="Team Of Consultants"
                subHeading="Quality consultation server is our commitment"
                />
            <Doctors></Doctors>            
            <MedicalDepartments></MedicalDepartments>
            <SectionTitle 
                    heading="Whats our patients saying"
                    subHeading="We are providing world class health service from starting"
                    />
            <PatientReview></PatientReview>
            <OurPartners></OurPartners>
            <SectionTitle
            heading="Health Packages"
            subHeading="It's very much important for you, if you are health con!"
            />
            <HealthPackages></HealthPackages>
            <AppointmentBookBanner></AppointmentBookBanner>

            {/* Consultants */}

            <div className='consultants-container'>
                
                
                <div>
                    
                    <Overview></Overview>
                    <SubmitQuery></SubmitQuery>
                    
                </div>
            </div>

            {/* Make Appointment */}
            {/* <SubmitQuery></SubmitQuery> */}
            
        </section>
    );
};

export default Home;