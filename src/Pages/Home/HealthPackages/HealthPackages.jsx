import './HealthPackages.css'
import axios from 'axios';

import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/Loading/Loading';

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Swiper modules
import { FreeMode, Pagination} from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const HealthPackages = () => {
            
        const {data: healthPackages = [], isLoading: isHealthPackagesLoading} = useQuery(['healthPackages'], 
        async () => {
            const res = await axios.get('http://localhost:5000/health-packages');
            return res.data;
        }
        )

        const navigate = useNavigate();
        const handlePackageBooking = hPackage => {
            navigate(`/book-health-package/${hPackage?._id}`)
        }
        

        // Slider Responsive Start
    const [slidesPerView, setSlidesPerView] = useState(4);

    useEffect(() => {
        const handleResize = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 576) {
            setSlidesPerView(2);
        } 
        else if(windowWidth < 992){
            setSlidesPerView(2);
        }
        else {
            setSlidesPerView(3);
        }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call to set the initial slidesPerView

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

// Slider Responsive End

        if(isHealthPackagesLoading){
            return <Loading/>
        }

    return (
        <div className='container'>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={5}
                freeMode={true}
                
                pagination={{
                clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
{/* TODO: fix the background photo */}
                {
                    healthPackages?.map(hPackage => <SwiperSlide key={hPackage._id}>
                        <div onClick={() => handlePackageBooking(hPackage)} 
                        className='healthPackage-container'>
                            <div className="background-overlay"
                                style={{ backgroundImage: `url(${hPackage.photo})` }}
                            ></div>
                            <h1 className='healthPackage-head'>{hPackage.name}</h1>
                            <p className='healthPackage-price'>{hPackage.price}/-</p>
                            <button className='btn-healthPackage'>Book Now</button>
                            

                            {
                                hPackage.investigations.map((investigation, index) => <p className='investigation-names' key={index}>{index + 1}. {investigation}</p>)
                            }

                        </div>
                    </SwiperSlide>)                    
                }
                
            </Swiper>
            
        </div>
    );
};

export default HealthPackages;