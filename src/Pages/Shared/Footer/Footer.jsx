import './Footer.css'
import HospitalLogo from '../../../components/HospitalLogo/HospitalLogo';
import SocialMediaLinks from '../../../components/SocialMediaLinks/SocialMediaLinks';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className=''>
            <section className='footer-container'>
                <div className='links-container'>
                    <HospitalLogo/>
                    <p className='description'>The first private hospital <br /> in Dhaka.</p> <br />
                    <SocialMediaLinks/>
                </div>
                
                <div className='links-container'>
                    <h4>Departments</h4>
                    <Link className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/> 
                    Emergency</Link>

                    <Link className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/>
                    Cardiology</Link>
                    
                    <Link className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/>
                    Orthopedic</Link>

                    <Link className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/>
                    Gynayecology</Link>

                    <Link className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/>
                    Surgical</Link>

                    <Link className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/>
                    X-Ray</Link>

                    <Link className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/>
                    Child Care</Link>

                    <Link className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/>
                    Blood Bank</Link>                   
                </div>

                <div className='links-container'>
                    <h4>Links</h4>
                    <Link to='/dashboard' className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/> 
                    Dashboard</Link>

                    <Link className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/> 
                    Career</Link>

                    <Link className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/> 
                    About</Link>

                    <Link className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/> 
                    Departments</Link>

                    <Link to='/doctors' className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/> 
                    Doctors</Link>

                    <Link className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/> 
                    Blog</Link>

                    <Link className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/> 
                    Contact</Link>                    
                </div>

                <div className='links-container'>
                    <h4>Services</h4>
                    <Link className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/> 
                    Emergency Online Consultation</Link>

                    <Link className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/> 
                    Qualified Doctors</Link>

                    <Link className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/> 
                    Medical Treatment</Link>

                    <Link className='footer-link-btn'> <FaArrowAltCircleRight className='footer-link-icon'/> 
                    Location & Directions</Link>                                      
                </div>

                <div className='links-container'>
                    <h4>Have any questions?</h4>
                    <p className='description'><FaMapMarkerAlt className='footer-link-icon'/>
                    209, Outer Circular Road, <br /> Moghbazar, Dhaka- 1217
                    </p>
<br />
                    <p className='description'> <FaPhoneAlt className='footer-link-icon'/>
                    02 49397700, 01708 458 000
                    </p>  
<br />              
                    <p className='description'> <FaEnvelopeOpen className='footer-link-icon'/>
                    info@rushmono.com
                    </p>  
                </div>

            </section>

            {/* Copyright Section */}
            <section className='copyright-container'>
                <p>© Rushmono Specialized Hopital Limited</p>
            </section>
        </div>
    );
};

export default Footer;