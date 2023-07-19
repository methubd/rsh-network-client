import { useQuery } from '@tanstack/react-query';
import './PatientReview.css'
import axios from 'axios';
import Loading from '../../../components/Loading/Loading';


// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';


const PatientReview = () => {

    const {data: reviews = [], isLoading: isPtReviewsLoading} = useQuery(['ptReviews'], 
    
    async () => {
        return await axios.get('https://rsh-network-server.vercel.app/patient-review')
        .then((response) => {
            return response.data;
        })        
    }
    )

    if (isPtReviewsLoading) {
        return <Loading/>
    }
    
    return (
        <div className='review-container'>
            

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    reviews?.map(review => <SwiperSlide
                    key={review._id}
                    >
                        <div className='review-body'>
                            <img src={review ? review.ptPhoto : "https://i.pinimg.com/originals/7d/34/d9/7d34d9d53640af5cfd2614c57dfa7f13.png"} alt="" />
                            <p>{review?.ptReview}</p>

                            <Rating className='star-rating'
                                style={{ maxWidth: 100 }}
                                value={review?.rating}
                                readOnly
                            />

                            <div className='review-patient-info'>
                                <h4>{review?.ptName}</h4>
                                <p>{review?.Author}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            {/* <Link className='btn-add-review' to="/dashboard/add-review">Add a Review Now</Link> */}
        </div>
    );
};

export default PatientReview;