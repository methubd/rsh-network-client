import { useLoaderData, useNavigate } from 'react-router-dom';
import './MakeAppointment.css'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../../../components/Loading/Loading';
import useAuth from '../../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useState } from 'react';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const MakeAppointment = () => {
    const [btnAvailable, setBtnAvailable] = useState(false);
    const [selectDate, setSelectDate] = useState(new Date());

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

    const handleConsultationType = event => {
        const selectedType = event.target.value;

        if(selectedConsultant.videoConsult === "No" && selectedType === 'video'){
            Swal.fire(
                'We are sorry!',
                `${selectedConsultant?.name}, not available for video consult.`,
                'warning'
              )
        setBtnAvailable(false);
        }

        else{
            setBtnAvailable(true)
        }

    }

    const handleMakeAppointment = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = selectDate;
        const age = form.age.value;
        const weigth = form.weigth.value;
        const contact = form.contact.value;
        const brief = form.brief.value;
        const doctorName = selectedConsultant?.name;
        const doctorEmail = selectedConsultant?.email;
        const doctorFee = selectedConsultant?.consultationFee;
        const userEmail = user?.email;

        const newAppointment = {
            name, 
            date, 
            age, 
            weigth, 
            contact, 
            brief, 
            doctorName, 
            doctorEmail, 
            userEmail, 
            doctorFee, 
            status: "Pending"};

        axios.post('https://rsh-network-server.vercel.app/appointments', newAppointment)
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

                

                    {/* Consultation Type Functionality */}
                    <select onChange={handleConsultationType} className='select-field' name="consultationType" required>
                        <option disabled selected>Select Consultation Type</option>
                        <option value="video">  Video Consult</option>
                        <option value="hospital">Hospital Visit</option>
                    </select>

                    
                    <DatePicker 
                    className='appointment-field date-field' 
                    selected={selectDate} 
                    onChange={(date) => setSelectDate(date)} 
                    placeholderText='Select Date'
                    dateFormat="PP"
                    />        
                    <p className='doctor-fee'>Select Only These Days : <span className='doctor-head'>{selectedConsultant?.chamberDay}</span></p>

                    <input className="appointment-field" type="text" name="name" placeholder='Patient Full Name *' required/>

                    <div className='appointment-field-group'>
                        <input className="appointment-field" type="number" name="age" placeholder='Age *' required/>
                        <input className="appointment-field" type="number" name="weigth" placeholder='Weight *'required/>
                    </div>

                    <input className="appointment-field" type="number" name="contact" placeholder='Mobile Number *'required/>

                    <textarea className="appointment-field" name="brief" cols="30" rows="5" placeholder='Short brief'></textarea>

                    <div className='appointment-field-group'>
                        <p className='doctor-fee'>Doc : <span className='doctor-head'>{selectedConsultant?.name}</span></p>
                        <p className='doctor-fee'>Fee : <span className='doctor-head'>{selectedConsultant?.consultationFee}</span>/-</p>
                    </div>
                    
                    <br />
                    
                    { btnAvailable &&
                    <div className='btn-container fade-in'>
                        <input className='btn-primary' type="submit" value="Confirm Appointment" />
                    </div>
                    }
                </form>
            </div>
        </div>
    );
};

export default MakeAppointment;