import { useLoaderData } from 'react-router-dom';
import './BookHealthPackage.css'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../../../components/Loading/Loading';
import useAuth from '../../../../Hooks/useAuth';
import { useState } from 'react';

const BookHealthPackage = () => {
    const [collectionCharge, setCollectionCharge] = useState(0);
    const packageLink = useLoaderData();
    const {user} = useAuth();

    const {data: selectedPackage = {}, isLoading:isSelectedPackageLoading } = useQuery(['selectedConsultant', packageLink], 
        async () => {
            const res = await axios.get(packageLink)
            return res.data;
        }
    )

    if(isSelectedPackageLoading){
        return <Loading></Loading>
    }

    
    const handleCollectionMethod = event => {
        const selectedValue = event.target.value;

        if(selectedValue === 'home'){
            setCollectionCharge(500)
        }
        else{
            setCollectionCharge(null)
        }
    }
 
    const handleBookAppointment = event => {
        event.preventDefault();

        const form = event.target;
        const ptName = form.name.value;
        const ptAge = form.age.value;
        const ptNumber = form.contact.value;
        const totalPrice = collectionCharge + selectedPackage.price;
        const newHealthPackageBooking = {ptName, ptAge, ptNumber, totalPrice};
        console.log(newHealthPackageBooking);
        
    }

    return (
        <div className='make-appointment-container'>
            <div className='appointment-body fade-in'>
            <h4>- <span className='doctor-head'>{selectedPackage?.name}</span> Booking Form -</h4>
                <form className='field-body' onSubmit={handleBookAppointment}>

                    <input className="appointment-field" type="text" name="name" placeholder='Patient Full Name *' defaultValue={user?.displayName} required/>

                    <input className="appointment-field" type="number" name="age" placeholder='Age *' required/>                    

                    <input className="appointment-field" type="number" name="contact" placeholder='Mobile Number *'required/>

                    <select onChange={handleCollectionMethod} className='appointment-field select-field' name='collectionMethod'>
                        <option disabled selected>Sample Collection Method</option>
                        <option value="hospital">Hospital Collection</option>
                        <option value="home">Home Collection</option>
                    </select>

                    {collectionCharge === 500 &&
                        <p className='doctor-fee appointment-field fade-in'>Sample Collection Charge : <span className='doctor-head'>{collectionCharge}</span>/-</p>
                    }

                    <p className='doctor-fee appointment-field'>Total Price : <span className='doctor-head'>{selectedPackage?.price + collectionCharge}</span>/-</p>
                    
                    <br />
                    <div className='btn-container'>
                        <input className='btn-primary' type="submit" value="Confirm Booking" /> 
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookHealthPackage;