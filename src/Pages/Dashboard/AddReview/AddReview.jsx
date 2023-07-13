import { Rating } from '@smastrom/react-rating';
import DashboardTitle from '../../../components/DashboardTitle/DashboardTitle';
import './AddReview.css'
import { useRef, useState } from 'react';
import '@smastrom/react-rating/style.css'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';

const AddReview = () => {
    const ratingRef = useRef(null);
    const [rating, setRating] = useState(0);
    const [axiosSecure] = useAxiosSecure();
    const {user} = useAuth();

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const ptReview = form.review.value;
        const ptName = user?.displayName;
        const ptEmail = user?.email;
        const ptPhoto = user?.photoURL;
        const patientReview = {ptReview, rating, ptName, ptEmail, ptPhoto, Status: "Pending", Author: "Patient"};

        axiosSecure.post('/patient-review', patientReview)
        .then(data => {
            console.log(data.data);
            if(data.data.duplicate === true){
                Swal.fire(
                    'Sorry!',
                    'You already added a review!',
                    'error'
                  )
                  form.reset();
            }

            else if (data.status === 200) {
                Swal.fire(
                    'Success!',
                    'Your review has been added.',
                    'success'
                  )
                  form.reset()
            }
        })

    }
    return (
        <div className='add-consultant-container'>
            <DashboardTitle title="Add your Review"/>

            <div className='add-review-container'>
                <form className='' onSubmit={handleAddReview}>
                    
                    <textarea className='review-box' name="review"  cols="30" rows="5" placeholder='Feel free to share your opinion about our services with us.' required></textarea>

                    <Rating className='star-rating'
                        style={{ maxWidth: 180}}
                        ref={ratingRef}
                        value={rating}
                        onChange={setRating}
                        isRequired={true}
                    />

                    <br />

                    <input className='btn-primary' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;