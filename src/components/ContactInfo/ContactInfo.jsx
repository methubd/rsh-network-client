import { Link } from "react-router-dom";
import './ContactInfo.css'

const ContactInfo = () => {
    return (
        <div>
            <div className="contact-info-container">
                <p className="care-no">24/7 <span className='care-line'>CareLine</span> : <br /> 01708 458 000, 02 00 0000</p>
                <div>
                    <Link to='/doctors'><button className='btn-primary'>Available Doctors</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;