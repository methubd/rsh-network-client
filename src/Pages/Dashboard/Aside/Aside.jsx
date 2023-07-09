import { ArrowLeftIcon } from '@heroicons/react/24/solid'

import { Link } from 'react-router-dom';
import './Aside.css'
import useAdmin from '../../../Hooks/useAdmin';
import useAuth from '../../../Hooks/useAuth';

const Aside = () => {
    const {user} = useAuth();
    const [isAdmin] = useAdmin();

    return (
        <aside>
            
            <button>Hide</button>
            
            {/* User Routes */}
            { user &&
                
            <>
            <Link className='dashboard-btn btn-primary' to='/dashboard/'>Home</Link>
            <Link className='dashboard-btn btn-primary' to='/dashboard/'>Prescription</Link>
            <Link className='dashboard-btn btn-primary' to='/dashboard/pending-appointment'>Pending Appointment</Link>
            <hr className='hr-line' />

            <Link className='dashboard-btn btn-primary' to='/dashboard/'>Payment History</Link>
            <Link className='dashboard-btn btn-primary' to='/dashboard/'>Appointment History</Link>
            <hr className='hr-line' />
            </>
            
            }
            
            {/* Admin Routes */}
            {  isAdmin &&
            <>
                <Link className='dashboard-btn btn-primary' to='/dashboard/manage-users'>Manage Users</Link>
                <Link className='dashboard-btn btn-primary' to='/dashboard/manage-consultant'>Manage Consultants</Link>
                <hr className='hr-line' />
            </>
            }

            <Link className='dashboard-btn btn-secondary btn-with-icon' to='/'>Go Back <ArrowLeftIcon className='back-icon'/> </Link>
        </aside>
    );
};

export default Aside;