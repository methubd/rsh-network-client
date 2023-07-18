import DashboardTitle from '../../../components/DashboardTitle/DashboardTitle';
import './MyAppointments.css'

const MyAppointments = () => {
    return (
        <div className='add-consultant-container'>
            <DashboardTitle
            title="My Appointments"
            />

            <p className='fade-in caution-dont'>My Appointments will be available soon..</p>
        </div>
    );
};

export default MyAppointments;