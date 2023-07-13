import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import './SocialMediaLinks.css'

const SocialMediaLinks = () => {
    return (
        <div className='social-links-container'>
            <FaFacebookSquare className='social-icons'/>
            <FaInstagram className='social-icons'/>
            <FaLinkedin className='social-icons'/>
            <FaTwitterSquare className='social-icons'/>
            <FaYoutube className='social-icons'/>
        </div>
    );
};

export default SocialMediaLinks;