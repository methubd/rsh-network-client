import './PendingAppointment.css'
import DashboardTitle from '../../../components/DashboardTitle/DashboardTitle';
import { Helmet } from 'react-helmet';

const PendingAppointment = () => {
    return (
        <div className='add-consultant-container'>
            <Helmet title='RSH | Pending Appointment'/>
            <DashboardTitle title="Pending Appointments"/>
            

        </div>
    );
};

export default PendingAppointment;