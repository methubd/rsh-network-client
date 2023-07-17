import { Helmet } from 'react-helmet';
import './Doctors.css'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import Swal from 'sweetalert2';

const Doctors = () => {
        
    const {data: consultants = [], isLoading: isConsultantsLoading} = useQuery(['consultants'], 
    async () => {
        const res = await axios.get('https://rsh-network-server.vercel.app/consultants')
        return res.data;
    })

    if(isConsultantsLoading){
        return <Loading></Loading>
    }

    const handleViewProfile = () => {
        Swal.fire({
            icon: 'question',
            title: 'Curious?',
            text: 'We promise! ASAP full profile feature will be available for you!',
            footer: '<a href="/doctors">Make Appointment</a>'
          })
    }


    return (        
        <div className="doctor-container fade-in">
            <Helmet title="Doctors | RSH"/>

            {
                consultants.map(consultant => <div 
                key={consultant._id} className='doctor-card'>
                <img className="doc-img" src={consultant?.image} alt="" />
                <h3 className='doc-name'>{consultant?.name}</h3>
                <p className='doc-speciality'>{consultant?.speciality}</p>
                <p className='doc-speciality'>{consultant?.degree}</p>
                <p className='chamber-days'>{consultant?.chamberDay}</p>
                <Link onClick={handleViewProfile} className='btn-doc-profile'> <small>View Full Profile</small> </Link>
                
                <Rating className='star-rating'
                    style={{ maxWidth: 100 }}
                    value={consultant?.ratings}
                    readOnly
                />
                
                <div>
                    <Link className='btn-primary' to={`/make-appointment/${consultant?._id}`}>Appointment</Link>
                </div>

            </div>)
            }

        </div>
    );
};

export default Doctors;