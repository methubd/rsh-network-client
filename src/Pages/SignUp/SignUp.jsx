import { Link } from 'react-router-dom';
import './SignUp.css'
import SocialLogins from '../../components/SocialLogins/SocialLogins';

const SignUp = () => {
    return (
        <section className='signup-container'>
            <div className='signup-title-container'>
                <h1 className='signup-title'>Join RUSHMONO</h1>
                <p className='signup-description'><small>Already have an account? <Link to='/signin'>Sign In</Link></small></p>
            </div>

            <div>
                <SocialLogins></SocialLogins>
            </div>

            <form className='form-body'>
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