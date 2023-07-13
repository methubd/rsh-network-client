import { Link } from 'react-router-dom';
import './HospitalLogo.css'

const HospitalLogo = () => {
    return (
        <div>
            <Link to='/'><img className='logo' src="https://i.ibb.co/k8qL7Jf/logo.png" alt="" /></Link>
        </div>
    );
};

export default HospitalLogo;