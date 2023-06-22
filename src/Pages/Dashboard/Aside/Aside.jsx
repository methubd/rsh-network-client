import { ArrowLeftIcon } from '@heroicons/react/24/solid'

import { Link } from 'react-router-dom';
import './Aside.css'

const Aside = () => {
    return (
        <aside>
            <button>Hide</button>
            
            {/* User Routes */}
            <Link className='dashboard-btn btn-primary' to='/dashboard/'>Home</Link>
            <Link className='dashboard-btn btn-primary' to='/dashboard/'>Prescription</Link>
            <Link className='dashboard-btn btn-primary' to='/dashboard/'>Pending Appointment</Link>
            <hr className='hr-line' />

            <Link className='dashboard-btn btn-primary' to='/dashboard/'>Payment History</Link>
            <Link className='dashboard-btn btn-primary' to='/dashboard/'>Appointment History</Link>
            <hr className='hr-line' />
            
            {/* Admin Routes */}
            <Link className='dashboard-btn btn-primary' to='/dashboard/add-consultant'>Add Consultant</Link>
            <Link className='dashboard-btn btn-primary' to='/dashboard/'>Manage Users</Link>
            <Link className='dashboard-btn btn-primary' to='/dashboard/'>Manage Consultants</Link>

            <hr className='hr-line' />
            <Link className='dashboard-btn btn-secondary btn-with-icon' to='/'>Go Back <ArrowLeftIcon className='back-icon'/> </Link>
        </aside>
    );
};

export default Aside;