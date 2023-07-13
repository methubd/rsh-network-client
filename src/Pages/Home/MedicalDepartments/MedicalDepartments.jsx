import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './MedicalDepartments.css'

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Swiper modules
import { FreeMode, Pagination} from 'swiper/modules';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/Loading/Loading';
import { useEffect, useState } from 'react';


const MedicalDepartments = () => {

    const {data: services = [], isLoading: isServicesLoading} = useQuery(['services'], 
    async () => {
        const res = await axios.get('http://localhost:5000/feature-services');
        return res.data;
    }
    )

    // Slider Responsive Start
    const [slidesPerView, setSlidesPerView] = useState(4);

        useEffect(() => {
            const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth < 576) {
                setSlidesPerView(1);
            } 
            else if(windowWidth < 992){
                setSlidesPerView(2);
            }
            else {
                setSlidesPerView(4);
            }
            };

            window.addEventListener('resize', handleResize);
            handleResize(); // Initial call to set the initial slidesPerView

            return () => {
            window.removeEventListener('resize', handleResize);
            };
        }, []);

    // Slider Responsive End

    if(isServicesLoading){
        return <Loading/>
    }

    const handleDepartmentDetails = service => {
        console.log('Clicked on Department', service.department);
    }

    

    return (
        <div className='container'>
            <SectionTitle
            heading='Medical Departments'
            ></SectionTitle>

            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                freeMode={true}
                
                pagination={{
                clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >

                {
                    services?.map(service => <SwiperSlide key={service._id}>
                        <div onClick={() => handleDepartmentDetails(service)} className='service-container'>
                            <img className='service-icon' src={service.icon} alt="" />
                            <h1 className='service-head'>{service.department}</h1>
                            <p className='service-description'>{service.description}</p>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>

        </div>
    );
};

export default MedicalDepartments;