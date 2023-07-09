import { useLoaderData } from 'react-router-dom';
import DashboardTitle from '../../../components/DashboardTitle/DashboardTitle';
import './AddConsultant.css'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../../components/Loading/Loading';
import { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Toaster, toast } from 'react-hot-toast';

const Image_Upload_Token = import.meta.env.VITE_Image_Upload_Token

const AddConsultant = () => {
    //TODO: use params to get data and then delete code "useEffect()"
    const userLink = useLoaderData();
    const [imgURL, setImgURL]  = useState('');
    const [axiosSecure] = useAxiosSecure()
    const [isUploadLoading, setIsUploadLoading] = useState(false)

    // fetching specific user to change role and update doctor profile
    const {data: specificUser = {}, refetch, isLoading: isUserDataLoading} = useQuery(['specificUser', userLink],
        async () => {
            const res = await axios.get(userLink)
            return res.data;
        }
        )
        
    refetch()
        
    // uploading doctor image
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${Image_Upload_Token}`

    const UploadImage = e => {
        const formData = new FormData();
            formData.append('image', e.target.files[0])
            
            setIsUploadLoading(true)
            fetch(img_hosting_url, {
                method: 'POST',
                body: formData
            })

            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse);
                setImgURL(imgResponse.data.display_url)
                setIsUploadLoading(false)
            })        
    }

    if(isUserDataLoading){
        return <Loading></Loading>
    }

    // submitting doctor data
    const handleAddConsultant = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const bmdc = form.bmdc.value;
        const email = specificUser?.email;
        const speciality = form.speciality.value;
        const degree = form.degree.value;
        const chamberDay = form.chamberDay.value;
        const designation = form.designation.value;
        const consultationFee = form.consultantFee.value;
        const contact = form.contact.value;
        const whatsapp = form.whatsapp.value;
        const facebook = form.facebook.value;
        const image = imgURL;
        const newConsultantInfo = {name, bmdc, email, speciality, degree, designation, consultationFee , contact, whatsapp, facebook, chamberDay, image};

        axiosSecure.post('/consultants', newConsultantInfo)
        .then(data => {
            console.log(data.status);
            if(data.status === 200){
                toast.success('Successfully doctor added!')
                form.reset();
            }
        });
        
        axiosSecure.put('/users', {email: specificUser?.email, role: 'doctor'})
        .then(data => {
            console.log(data.status);
        })
    }

    // TODO: change user role from userCollection


    return (
        <div className='add-consultant-container'>
            <Toaster></Toaster>
            <DashboardTitle title="Add a Consultant"/>
            
            <section className='add-doctor-field-container'>

                <form onSubmit={handleAddConsultant} className='form-body'>
                    <input className='form-field' type="text" name="name" placeholder='Doctor Name *' defaultValue={specificUser?.name} readOnly/>

                    <input className='form-field' type="email" name="email" placeholder='Doctor email *' defaultValue={specificUser?.email} readOnly/>

                    <input className='form-field' type="text" name="bmdc" placeholder='BMDC Registration No. *' />

                    <input className='form-field' type="text" name="speciality" placeholder='Speciality *' />

                    <input className='form-field' type="text" name="degree" placeholder='Degrees *' />

                    <input className='form-field' type="text" name="designation" placeholder='Designation' />

                    <input className='form-field' type="text" name="chamberDay" placeholder='Chamber Day' />

                    <input className='form-field' type="number" name="consultantFee" placeholder='Consultation Fee *' required />

                    <input className='form-field' type="text" name="contact" placeholder='Contact Number *' />

                    <input className='form-field' type="text" name="whatsapp" placeholder='WhatsApp *' />

                    <input className='form-field' type="text" name="facebook" placeholder='Facebook profile URL *' />

                    <label className='description' htmlFor="image">Upload Doctor Profile Picture</label>

                    <input onChange={UploadImage} className='form-field' name='image' type="file"/>

                    {
                        isUploadLoading ? 
                        <Loading></Loading>
                        :
                        <input className='form-field btn-getStarted' type="submit" value='Submit' />
                    }

                </form>
            </section>

        </div>
    );
};

export default AddConsultant;