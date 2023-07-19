import { Link, useLoaderData } from 'react-router-dom';
import './DoctorProfile.css'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { Rating } from '@smastrom/react-rating';

const DoctorProfile = () => {
    const doctor = useLoaderData();
    const {name, speciality, degree, designation, consultationFee, image, ratings} = doctor;
    
    return (
        <section className='doc-profile-container fade-in container'>
            <div className='doc-basic-info-container'>
                <div className='basic-info-con'>
                    <div className='profile-picture-con'>
                        <img src={image} alt="" />
                    </div>
                    <div className='doctor-basic-info'>
                        <h2>{name}</h2>
                        <h3>{designation}</h3>
                        <p>{speciality}</p>
                        <p className='avaibility'> <MapPinIcon width={20}/> Available at 1 different locations <br /> <span className='another-chamber'>Friends Care Hospital Limited, Mugda</span></p>
                    </div>
                </div>
                
                <div className='experiences'>
                    <p className='doc-info-data-field'>35 Years Experience</p>
                    <p className='doc-info-data-field'>Fee: {consultationFee}</p>
                    <p className='doc-info-data-field'>Ratings: 
                    <Rating className=''
                    style={{ maxWidth: 100 }}
                    value={ratings}
                    readOnly
                />
                    <button className='btn-add-review'>Add Review</button>
                    </p>
                </div>
            </div>

            <hr className='divide-line' />

            <div className='doc-detail-info-container'>
                <div className='about-info'>
                    <div className='about'>
                        <h3>About</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quam omnis delectus exercitationem perferendis ad recusandae iste molestiae explicabo, expedita quos dolore esse natus consectetur itaque architecto maxime, et incidunt!</p>
                    </div>
                    <div className='about'>
                        <h3>Education</h3>
                        <p>{degree}</p>
                    </div>
                </div>

                <div className='appointment-function'>
                    <h3>Schedule Appointment</h3>
                
                    <button className='btn-primary'>
                    <Link className='btn-primary' to={`/make-appointment/${doctor?._id}`}>Appointment</Link>
                    </button> <br />
                    <button className='btn-primary'>Request A Call Back</button>
                </div>
            </div>
        </section>
    );
};

export default DoctorProfile;