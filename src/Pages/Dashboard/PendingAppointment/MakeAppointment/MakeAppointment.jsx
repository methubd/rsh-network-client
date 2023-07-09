import { useLoaderData, useNavigate } from 'react-router-dom';
import './MakeAppointment.css'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../../../components/Loading/Loading';
import useAuth from '../../../../Hooks/useAuth';
import Swal from 'sweetalert2';

const MakeAppointment = () => {

    const consultantLink = useLoaderData();
    const {user} = useAuth();
    const navigate = useNavigate();

    const {data: selectedConsultant = {}, isLoading:isSelectedConsultantLoading } = useQuery(['selectedConsultant', consultantLink], 
        async () => {
            const res = await axios.get(consultantLink)
            return res.data;
        }
    )

    if(isSelectedConsultantLoading){
        return <Loading></Loading>
    }

    const handleMakeAppointment = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const age = form.age.value;
        const weigth = form.weigth.value;
        const brief = form.brief.value;
        const doctorName = selectedConsultant?.name;
        const doctorEmail = selectedConsultant?.email;
        const doctorFee = selectedConsultant?.consultationFee;
        const userEmail = user?.email;

        const newAppointment = {name, age, weigth, brief, doctorName, doctorEmail, userEmail, doctorFee, status: "pending"};

        axios.post('http://localhost:5000/appointments', newAppointment)
        .then(data => {
            if(data.status === 200){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Appointment Created, Please Pay!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  form.reset()
                  navigate('/dashboard/pending-appointment')
                  
            }
        })
    }

    return (
        <div className='make-appointment-container'>
            <div className='appointment-body fade-in body-border'>
            <h4>- Please Enter Patient Details -</h4>
                <form className='field-body' onSubmit={handleMakeAppointment}>
                    <input className="appointment-field" type="text" name="name" placeholder='Patient Full Name' required/>

                    <input className="appointment-field" type="number" name="age" placeholder='Age' required/>

                    <input className="appointment-field" type="number" name="weigth" placeholder='Weight'required/>

                    <textarea className="appointment-field" name="brief" cols="30" rows="5" placeholder='Short brief'></textarea>

                    <p className='doctor-fee appointment-field'>Doctor : <span className='doctor-head'>{selectedConsultant?.name}</span></p>
                    <p className='doctor-fee appointment-field'>Consultation Fee : <span className='doctor-head'>{selectedConsultant?.consultationFee}</span>/-</p>
                    
                    <br />

                    <div className='btn-container'>
                        <input className='btn-primary' type="submit" value="Confirm Appointment" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAppointment;