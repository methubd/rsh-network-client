import { Link } from "react-router-dom";
import SocialLogins from "../../components/SocialLogins/SocialLogins";
import { Helmet } from "react-helmet";


const SignIn = () => {

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.email.value;
        console.log(email, password);
    }

    return (
        // https://app.tooljet.com/login?redirectTo=/
        <section className='signup-container'>
            <Helmet title='Sign in | RSH'/>
            <div className='signup-title-container'>
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