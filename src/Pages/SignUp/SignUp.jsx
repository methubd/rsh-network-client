import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { Helmet } from 'react-helmet';
import SocialSignUp from '../../components/SocialSignUp/SocialSignUp';
import useAuth from '../../Hooks/useAuth';
import { Toaster, toast } from 'react-hot-toast';


const SignUp = () => {
    const {createUser, updateUserProfile, logOut} = useAuth()

    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password !== confirm){
            toast.error("Password not matched!")
            return;
        }
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            updateUserProfile(name)
            .then(() => {
                const newUser = {name, email}
                fetch('https://rsh-network-server.vercel.app/users', {
                    method: "POST",
                    headers: {
                        "content-type" : "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                form.reset();
                logOut();
                navigate('/signin')
            })
            toast.success("Successfully User Created!")
        })
    }

    return (
        <section className='signup-container fade-in'>

            <div className='signin-company-logo'>
            <Link to='/'><img className='logo ' src="https://i.ibb.co/k8qL7Jf/logo.png" alt="" /></Link>
            </div>

            <Toaster/>
            <Helmet title='Sign up | RSH'/>
            <div className='signup-title-container'>
                <h1 className='signup-title'>Join RUSHMONO</h1>
                <p className='signup-description'><small>Already have an account? <Link to='/signin'>Sign In</Link></small></p>
            </div>

            <div>
                <SocialSignUp></SocialSignUp>
            </div>

            <form onSubmit={handleSignUp} className='form-body'>
                <input className='form-field' type="text" name="name" placeholder='Enter your Full Name' />
                <input className='form-field' type="email" name="email" placeholder='Enter your email' />
                <input className='form-field' type="password" name="password" placeholder='Enter your new password' />
                <input className='form-field' type="password" name="confirm" placeholder='Confrim password' />

                <input className='form-field btn-getStarted' type="submit" value='Get started' />
            </form>
        </section>
    );
};

export default SignUp;