import './PendingAppointment.css'
import DashboardTitle from '../../../components/DashboardTitle/DashboardTitle';
import { Helmet } from 'react-helmet';
import useBookedAppointments from '../../../Hooks/useBookedAppointments';


const PendingAppointment = () => {
    const [appointments] = useBookedAppointments();
    console.log(appointments);

    const totalPayable = appointments.reduce((sum, item) => sum + parseInt(item.doctorFee), 0)

    return (
        <div className='add-consultant-container'>
            <Helmet title='RSH | Pending Appointment'/>
            <DashboardTitle title="Pending Appointments"/>

            <div className='total-bill-container'>
                <h3>Payable Amount: <span className='bill-amount'>{totalPayable}</span></h3>
                <button className='btn-primary'>Pay Now</button>
            </div>
            
            {
                appointments.map(appointment => <div 
                    key={appointment._id} className='single-user-container'>
                    <p className='user-data-field'>Patient: {appointment?.name}</p>
                    <p className='user-data-field'>Doctor: {appointment?.doctorName}</p>
                    <p className='user-data-field'>Fee: {appointment?.doctorFee}</p>
                    <p className='appointment-status'>{appointment?.status}</p>
                    <button className='action-button delete-btn'>Delete</button>
                    </div>)
            }

        </div>
    );
};

export default PendingAppointment;