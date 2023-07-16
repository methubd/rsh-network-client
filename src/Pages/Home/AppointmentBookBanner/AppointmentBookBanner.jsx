import { Link } from 'react-router-dom';
import './AppointmentBookBanner.css'

const AppointmentBookBanner = () => {
    return (
        <div className='container'>
            <div className='appointment-book-container'>
            <h1>Make a doctor appointment now!</h1>
            <Link className='appointment-book-banner-btn' to="/doctors">Appointment</Link>
            </div>
        </div>
    );
};

export default AppointmentBookBanner;