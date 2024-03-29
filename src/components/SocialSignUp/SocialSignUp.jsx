import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Toaster, toast } from "react-hot-toast";

const SocialSignUp = () => {
    const {googleSignup} = useAuth();
    const navigation = useNavigate();
    
    const handleGoogleSignUp = () => {
        googleSignup()
        .then(result => {
            const loggedUser = result.user;
            const name = loggedUser?.displayName;
            const email = loggedUser?.email;
            const newUser = {name, email}

            fetch('https://rsh-network-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    "content-type" : "application/json"
                }, 
                body: JSON.stringify(newUser)
            })

            if(loggedUser){
                navigation('/')
            }

            if(loggedUser){
                toast.success('Successfully Sign in')
            }
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className='social-login-container'>
            <Toaster/>
            <button onClick={handleGoogleSignUp} className='btn-google-login'><img className='google-icon' src="https://i.ibb.co/5189tFN/7123025-logo-google-g-icon.png" alt="" /> Sign up with Google</button>
            <hr className='bottom-line' />
        </div>
    );
};

export default SocialSignUp;