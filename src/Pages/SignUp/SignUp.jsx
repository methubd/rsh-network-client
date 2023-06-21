import { Link } from 'react-router-dom';
import './SignUp.css'
import { Helmet } from 'react-helmet';
import SocialSignUp from '../../components/SocialSignUp/SocialSignUp';


const SignUp = () => {
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        
        const newUser = {name, email, password, confirm}
        console.log(newUser);
    }

    return (
        <section className='signup-container'>
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