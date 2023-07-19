import './PendingAppointment.css'
import DashboardTitle from '../../../components/DashboardTitle/DashboardTitle';
import { Helmet } from 'react-helmet';
import useBookedAppointments from '../../../Hooks/useBookedAppointments';
import Swal from 'sweetalert2';
import axios from 'axios';


const PendingAppointment = () => {
    const [appointments] = useBookedAppointments();

    const totalPayable = appointments.reduce((sum, item) => sum + parseInt(item.doctorFee), 0)

    const handleAppointmentDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

            axios.delete(`http://localhost:5000/appointments/${id}`)
            .then(data => {
                
                if(data.status === 200) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }                    
                })

              

            }
        })
        
    }

    return (
        <div className='add-consultant-container'>
            <Helmet title='RSH | Pending Appointment'/>
            <DashboardTitle title="Pending Appointments"/>

            <div className='total-bill-container'>
            { appointments.length > 0 ?
                <>
                <h3>Payable Amount: <span className='bill-amount'>{totalPayable}</span></h3>
                <button className='btn-primary'>Pay Now</button>
                </>
                :
                <p className='fade-in caution-dont'>You do not have any pending service...</p>
            }
            </div>
            
            {
                appointments.map(appointment => <div 
                    key={appointment._id} className='single-user-container'>
                    <p className='user-data-field'>Patient: {appointment?.name}</p>
                    <p className='user-data-field'>Doctor: {appointment?.doctorName}</p>
                    <p className='user-data-field'>Fee: {appointment?.doctorFee}</p>
                    <p className='appointment-status'>{appointment?.status}</p>
                    <button onClick={() => handleAppointmentDelete(appointment._id)} className='action-button delete-btn'>Delete</button>
                    </div>)
            }

        </div>
    );
};

export default PendingAppointment;