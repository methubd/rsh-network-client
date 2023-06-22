import { useNavigate } from 'react-router-dom';
import './SocialLogins.css'
import useAuth from '../../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';

const SocialLogins = () => {
    const {googleSignup} = useAuth();
    const navigate = useNavigate();
    
    const handleGoogleSignUp = () => {
        
        googleSignup()
        .then(result => {
            const loggedUser = result.user;
            const name = loggedUser?.displayName;
            const email = loggedUser?.email;
            const newUser = {name, email}        

            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    "content-type" : "application/json"
                }, 
                body: JSON.stringify(newUser)
            })

            if(loggedUser){
                toast.success('Successfully Sign in')
            }
            
            navigate('/')

        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className='social-login-container'>
            <Toaster />
            <button onClick={handleGoogleSignUp} className='btn-google-login'><img className='google-icon' src="https://i.ibb.co/5189tFN/7123025-logo-google-g-icon.png" alt="" /> Sign in with Google</button>
            <hr className='bottom-line' />
        </div>
    );
};

export default SocialLogins;