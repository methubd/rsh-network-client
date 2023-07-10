import { Link, useNavigate } from "react-router-dom";
import SocialLogins from "../../components/SocialLogins/SocialLogins";
import { Helmet } from "react-helmet";
import useAuth from "../../Hooks/useAuth";
import { Toaster, toast } from "react-hot-toast";


const SignIn = () => {

    const {signInWithPassword} = useAuth();
    const navigate = useNavigate();

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithPassword(email, password)
        .then((result) => {
            if(result.user){
                toast.success('Successfully Sign in')
            }
            navigate('/')
        })
        .catch(error => console.log(error.message))

    }

    return (
        // https://app.tooljet.com/login?redirectTo=/
        <section className='signup-container fade-in'>
            
            <div className='signin-company-logo'>
            <Link to='/'><img className='logo ' src="https://i.ibb.co/k8qL7Jf/logo.png" alt="" /></Link>
            </div>

            <Toaster/>
            <Helmet title='Sign in | RSH'/>
            <div className='signup-title-container '>
                <h1 className='signup-title'>Sign in</h1>
                <p className='signup-description'><small>New to RUSHMONO? <Link to='/signup'>Sign Up</Link></small></p>
            </div>

            <div>
                <SocialLogins></SocialLogins>
            </div>

            <form onSubmit={handleSignIn} className='form-body'>
                <input className='form-field' type="email" name="email" placeholder='Enter your email' />
                <input className='form-field' type="password" name="password" placeholder='Enter your new password' />

                <input className='form-field btn-getStarted' type="submit" value='Login' />
            </form>
        </section>
    );
};

export default SignIn;