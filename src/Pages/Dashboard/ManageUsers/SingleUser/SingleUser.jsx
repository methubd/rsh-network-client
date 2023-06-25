import { Link } from 'react-router-dom';
import './SingleUser.css'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const SingleUser = ({user}) => {

    const [axiosSecure] = useAxiosSecure();
    
    const handleRevertUser = (user) => {
        axiosSecure.put('/users', {email: user?.email, role: 'user'})
        .then(data => {
            console.log(data.status);
        })
    }

    return (
        <div className='single-user-container'>
            <p className='user-data-field'>{user?.name}</p>
            <p className='user-data-field'>{user?.email}</p>
            <p className='user-data-field'>{user?.role}</p>
            <button onClick={() => handleRevertUser (user)} className='action-button'>Revert User</button>
            <Link to={`/dashboard/add-consultant/${user._id}`}><button className='action-button'>Make Doctor</button></Link>
            <button className='action-button'>Make Admin</button>
            <button className='action-button delete-btn'>X</button>
        </div>
    );
};

export default SingleUser;